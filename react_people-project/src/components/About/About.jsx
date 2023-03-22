import '../../styles/About.css';
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div>
            <header>
                <h1><Link to='/' className='link'>REACT People</Link></h1>
            </header>

            <div className='desc'>
                <div className="about">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore numquam magnam nihil, sequi temporibus accusantium iure fugit porro placeat voluptatum nostrum nulla similique veniam est unde aspernatur. Libero, nulla?
                    At ducimus soluta repudiandae omnis labore nesciunt similique iste aut amet veniam aliquam dolore molestiae reprehenderit exercitationem, explicabo enim consequatur eos quod tenetur, porro aspernatur deleniti distinctio ad optio. Praesentium.
                    Autem alias ratione nemo itaque eos quibusdam maiores provident cumque unde, deleniti voluptates vero temporibus, animi, harum sequi! Voluptate, minus veniam labore nobis doloribus quis eligendi? Maiores, consequatur sit? Assumenda.
                    Blanditiis laudantium beatae harum quasi facere corrupti minima placeat provident, dolorum molestiae recusandae aspernatur, ducimus perferendis maiores perspiciatis repellat libero inventore molestias numquam minus dolorem. Sunt totam accusamus eum delectus.
                    Fuga, ratione. Tempora saepe expedita molestiae ducimus cupiditate nam labore dolores qui culpa quis nostrum minima suscipit officia odio ipsam, odit magni commodi quae, ea temporibus amet voluptatem laudantium sit?</p>
                </div>

                <div className="what">
                    <h2>What we do</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus sapiente nostrum animi pariatur odio natus nemo, optio aliquam. Illo ab commodi perspiciatis fugiat fuga fugit cumque dolor nesciunt ipsam!
                    Dolorum quos quisquam asperiores officia maxime fugit eligendi soluta temporibus vitae distinctio. Cupiditate nihil qui laboriosam eum quod corrupti error dolorum aperiam quasi soluta nisi quam a, voluptas maiores libero.
                    Odit commodi dicta alias, perspiciatis facilis atque doloremque tenetur beatae, accusantium voluptatibus cumque hic distinctio consequatur unde doloribus assumenda vitae provident error obcaecati et ab temporibus quibusdam culpa? Debitis, quo?
                    Impedit architecto aliquam cupiditate delectus ab earum dignissimos obcaecati quisquam aspernatur dolorem nulla fugiat placeat repudiandae, est consequatur fuga nemo repellendus! Aliquid veniam est asperiores aut eveniet aliquam numquam ducimus!
                    Est quibusdam placeat quaerat, possimus beatae fugiat laboriosam dolores culpa ipsa repudiandae distinctio nemo natus. Maiores illo aperiam minus, saepe veritatis animi nesciunt possimus est! Aspernatur dignissimos fugit libero necessitatibus.</p>
                </div>
            </div>
        </div>
    );
}