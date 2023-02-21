import React, {useMemo, useState} from 'react';
import PostFilter from "./PostFilter";
import PostForm from "./PostForm";
import MyModal from "./UI/modal/MyModal";

const Posts = () => {
    const [text, setText] = useState("")
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [visible, setVisible] = useState([])

    // СОЗДАНИЕ И УДАЛЕНИЕ
    const addNewPost = (e) => {
        e.preventDefault()
        const post = {
            id: Date.now(),
            text
        }
        setPosts([...posts, post])
        setText("")
    }

    const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    // СОРТИРОВКА
    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts]
                .sort((a, b) => a[filter.sort].toString().localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    // ПОИСК
    const searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.text.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    return (
        <div>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {searchedAndSortedPosts.length === 0 && <div>There are no posts here yet</div>}
            <div>{searchedAndSortedPosts.map(p => <div key={p.id}>
                {p.text}
                <button type="submit" onClick={() => deletePost(p.id)}>Delete post</button>
            </div>)}</div>
            <MyModal>
                <PostForm text={text} setText={setText} addNewPost={addNewPost}/>
            </MyModal>
        </div>
    );
};

export default Posts;