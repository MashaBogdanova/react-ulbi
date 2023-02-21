import MySelect from "./UI/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <input
                type="text"
                placeholder="What are you looking for"
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultOption="Sort by"
                options={[
                    {value: "id", name: "Date"},
                    {value: "text", name: "Text"}
                ]}
            />
        </div>
    );
};

export default PostFilter;