import './Post.css';

const Post = () => {
    const listOfPosts = [
        {
            name: 'adispisicing ad fugiat',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, sint. Hic nemo, aspernatur ad corrupti velit culpa sit, ab dolores numquam labore praesentium dignissimos perferendis sint facilis, quaerat quam quibusdam.'
        },

        {
            name: 'est est consectetur',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium earum quis distinctio porro expedita inventore odio. Sunt voluptatibus perspiciatis in nisi placeat eius molestias, facere aliquid? Ut, officia. Asperiores.'
        },

        {
            name: 'quis veniam pariatur',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, sapiente tenetur expedita quia praesentium nam porro explicabo saepe voluptas consectetur, eos laudantium voluptates tempore architecto at itaque maiores molestiae corporis.'
        }
    ];

    return (
        <ul className="postList">
            {listOfPosts.map((item, i) => {
                return <li key={i}> <h4>{item.name}</h4> <p>{item.text}</p> </li>
            })}
        </ul>
    );
}

export default Post;
