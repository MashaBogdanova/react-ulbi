import React from 'react';

const PostForm = ({text, setText, addNewPost}) => {
    return (
        <div>
            <form>
                <input value={text}
                       onChange={event => setText(event.target.value)}
                       type="text"
                       placeholder="Posts"
                />
                <button type="submit" onClick={addNewPost}>Create post</button>
            </form>
        </div>
    );
};

export default PostForm;