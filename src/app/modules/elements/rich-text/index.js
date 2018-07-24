import { Editor } from 'slate-react'
import { Value } from 'slate'
import { Toolbar } from './toolbar'
import { throws } from 'assert'

function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}
function MarkHotkey(options) {
  const { type, key } = options
  return {
    onKeyDown(event, change) {
      if (!event.ctrlKey || event.key !== key) return

      event.preventDefault()
      change.toggleMark(type)
      return true
    },
  }
}

const plugins = [
  MarkHotkey({ key: 'i', type: 'italic' }),
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: '`', type: 'code' }),
  MarkHotkey({ key: '~', type: 'strikethrough' }),
  MarkHotkey({ key: 'u', type: 'underline' }),
]

export class RichTextEditor extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.renderNode = this.renderNode.bind(this)
    this.renderMark = this.renderMark.bind(this)
    this.applyToolbarChange = this.applyToolbarChange.bind(this)
    this.state = {
      editorValue: Value.fromJSON({
        document: {
          nodes: [
            {
              object: 'block',
              type: 'paragraph',
              nodes: [
                {
                  object: 'text',
                  leaves: [''],
                },
              ],
            },
          ],
        },
      }),
    }
  }
  onChange(ev) {
    const { value } = ev
    this.setState({ editorValue: value })
    if (this.props.onChange) {
      this.props.onChange(value.toJSON())
    }
  }
  renderNode(props) {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />
    }
  }
  renderMark(props) {
    switch (props.mark.type) {
      case 'bold':
        return <strong>{props.children}</strong>
      case 'italic':
        return <em>{props.children}</em>
      case 'underline':
        return <u>{props.children}</u>
      case 'strikethrought':
        return <strong>{props.children}</strong>
    }
  }
  applyToolbarChange(changeFn) {
    this.setState({
      editorValue: changeFn.call(null, this.state.editorValue.change()),
    })
  }
  render() {
    return (
      <div>
        <Toolbar onToobarItemClicked={this.applyToolbarChange} />
        <Editor
          {...this.props}
          value={this.state.editorValue}
          onChange={this.onChange}
          plugins={plugins}
          className="form-control"
          renderNode={this.renderNode}
          renderMark={this.renderMark}
        />
      </div>
    )
  }
}
