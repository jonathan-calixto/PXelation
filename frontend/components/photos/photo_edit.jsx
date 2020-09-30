import React from 'react';

export default class PhotoEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = props.photo;
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchPhoto(this.state.id);
    }

    handleSubmit(event){
        event.preventDefault();
        // debugger
        // const formData = new FormData();
        // formData.append('photo[title]', this.state.title);
        // formData.append('photo[description]', this.state.description);
        // formData.append('photo[location]', this.state.location);
        let editPhoto = {title: this.state.title, description: this.state.description, location: this.state.location, id: this.state.id};
        // formData.append('photo[photographer_id]', this.state.photographer_id);
        // formData.append('photo[photo]', this.state.photoFile);
        // this.props.createPhoto(formData);
        this.props.updatePhoto(editPhoto);
    }

    handleFile(event) {
        // debugger
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    update(field){
        return event => this.setState({ [field]: event.currentTarget.value });
    }

    render() {
        console.log(this.state);
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        const { deletePhoto } = this.props;
        return (
            <div className='outer-form-div'>
                <div className='form-title'>
                    <h2>Edit Photo</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='inner-form-div'>
                        <div className='image-preview-div'>
                            <h3>Image Preview</h3>

                            {preview}
                        </div>
                        <div className='image-details-div'>
                            <div className='centering-div'>
                                <label className='upload-labels'>Title:
                                    <br />
                                    <input type="text"
                                        value={this.state.title}
                                        onChange={this.update('title')}
                                        required
                                    />
                                </label>
                                <br /><br />
                                <label className='upload-labels'>Location:
                                    <br />
                                    <input type="text"
                                        value={this.state.location}
                                        onChange={this.update('location')}
                                        placeholder='Enter Location'
                                    />
                                </label>
                                <br /><br />
                                <label className='upload-labels'>Description:
                                    <br />
                                    <textarea cols="40" rows="3"
                                        value={this.state.description}
                                        onChange={this.update('description')}
                                        placeholder='e.g. Low angle view of young man surfing in the ocean with a clear blue sky'
                                    ></textarea>
                                </label>
                                <br /><br />
                                {/* <label className='upload-labels'>Choose Photograph:
                                    <br />
                                    <input type="file" onChange={this.handleFile} />
                                </label> */}
                                <br /><br />
                                <button className='upload-button' type='submit'>Save Changes</button>
                                <button onClick={deletePhoto} className='upload-button' type='submit'>Delete Photo</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}