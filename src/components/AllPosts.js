export default function AllPosts (props){
    const {posts}=props;
    return (
        <div>
            {posts &&
            <div>
                {posts.id} - {posts.title} - {posts.body}

            </div>
            }
        </div>
    );
}