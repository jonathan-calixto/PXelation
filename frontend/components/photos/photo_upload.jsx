import React from 'react';

export default class PhotoUpload extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.photo;

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(event){
        const file = event.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: event.currentTarget.files[0] });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    update(field){
        return event => this.setState({[field]: event.currentTarget.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('photo[title]', this.state.title);
        formData.append('photo[description]', this.state.description);
        formData.append('photo[location]', this.state.location);
        formData.append('photo[photographer_id]', this.state.photographer_id);
        formData.append('photo[photo]', this.state.photoFile);
        this.props.createPhoto(formData);
    }

    render(){
        console.log(this.state);
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>Image Preview</h3>
                        {preview}
                        <br/>
                        <label>Title:
                            <br/>
                            <input type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                            />
                        </label>
                        <br/>
                        <label>Location:
                            <br/>
                            <input type="text"
                                    value={this.state.location}
                                    onChange={this.update('location')}
                            />
                        </label>
                        <br/>
                        <label>Description:
                            <br/>
                            <textarea name="something" id="" cols="5" rows="5"
                                        value={this.state.description}
                                        onChange={this.update('description')}
                            ></textarea>
                        </label>
                        <br/>
                        <label>Choose Photograph:
                            <br/>
                            <input type="file" onChange={this.handleFile}/>
                        </label>
                        <br/>
                        <button type='submit'>Upload New Photo</button>
                    </div>
                </form>
            </div>
        );
    }
}