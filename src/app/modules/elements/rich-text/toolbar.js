import { Icon } from 'react-icons-kit'
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'
import { underline } from 'react-icons-kit/feather/underline'

export const Toolbar = props => (
  <div>
    <button
      className="btn btn-default toolbar-icon"
      title="Bold"
      onClick={() => {
        props.onToobarItemClicked(change => change.toggleMark('bold').value)
      }}
    >
      <Icon icon={bold} />
    </button>
    <button
      className="btn btn-default toolbar-icon"
      title="Italic"
      onClick={() => {
        props.onToobarItemClicked(change => change.toggleMark('italic').value)
      }}
    >
      <Icon icon={italic} />
    </button>
    <button
      className="btn btn-default toolbar-icon"
      title="Underline"
      onClick={() => {
        props.onToobarItemClicked(
          change => change.toggleMark('underline').value
        )
      }}
    >
      <Icon icon={underline} />
    </button>
  </div>
)
