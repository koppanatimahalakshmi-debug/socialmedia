import { useContext, useState } from "react"
import { postContext } from "../../Utilities";

const AddPost = () => {
    let [postDetails, setPostDetails] = useState({
        image: "",
        caption: "",
    });

    let { image, caption } = postDetails;
    let { addPost} = useContext(postContext);
    let handleChange = (e) => {
        let { name, value } = e.target;
        setPostDetails({ ...postDetails, [name]: value });
    };

    let userId = localStorage.getItem("id");
    let handleSubmit = (e) => {
        e.preventDefault();
        if (image === "" || caption === "") {
            alert("Fill All The Fields");
        } else if (userId) {
            let postData = {
                image: image,
                caption: caption,
                userId: localStorage.getItem("id"),
            };
            addPost(postData);
        } else {
            alert("Login First");
        }
        console.log(postDetails);
    };

    let handleImage = (e) => {
        let data = e.target.files[0];

        let reader = new FileReader();
        reader.onload = (e) => {
            let imageUrl = e.target.result;
            setPostDetails({ ...postDetails, image: imageUrl });
        };
        reader.readAsDataURL(data);
    };
    console.log(postDetails);
  return (
    <form onSubmit={handleSubmit}>
        <aside>
            <label htmlFor="image">Image</label>
            <input type="file" name="image" id="image" onChange={handleImage} />
        </aside>
        <aside>
            <label htmlFor="">Capton</label>
            <input 
            type="text" 
            name="caption"
            id="caption"
            value={caption}
            onChange={handleChange}
            />
        </aside>
        <aside>
            <button>Submit</button>
        </aside>
    </form>
  )
}

export default AddPost;
