import firebase from 'firebase'
import * as React from 'react'
import FileUploader from 'react-firebase-file-uploader'

interface IUploadButtonProps {
    type: 'image'
    name?: string
    label: string
    onUploadFinished?: (url: string) => void
}
interface IUploadButtonState {
    avatarURL: string
    progress: number
    isUploading: boolean
    avatar: any
}

export class UploadButton extends React.Component<
    IUploadButtonProps,
    IUploadButtonState
> {
    public static defaultProps = {
        name: 'avatar',
    }
    public state = {
        avatarURL: '',
        progress: 0,
        isUploading: false,
        avatar: null,
    }
    public handleUploadStart = () =>
        this.setState({ isUploading: true, progress: 0 })
    public handleProgress = progress => this.setState({ progress })
    public handleUploadError = error => {
        this.setState({ isUploading: false })
        // tslint:disable-next-line:no-console
        console.error(error)
    }
    public handleUploadSuccess = filename => {
        this.setState({
            avatar: filename,
            progress: 100,
            isUploading: false,
        })
        firebase
            .storage()
            .ref('images')
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({ avatarURL: url })
                if (this.props.onUploadFinished) {
                    this.props.onUploadFinished(url)
                }
            })
    }
    public render() {
        return (
            <label>
                {this.props.label}
                <FileUploader
                    accept="image/*"
                    name={this.props.name}
                    hidden={true}
                    randomizeFilename={true}
                    storageRef={firebase.storage().ref('images')}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                />
            </label>
        )
    }
}
