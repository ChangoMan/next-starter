import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

interface Props {
    // isArticleVisible: boolean;
    // timeout: boolean;
    // articleTimeout: boolean;
    // article: string;
    // onCloseArticle: () => void;
}

class Main extends React.Component<Props> {
    render() {

        // let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

        return (
            <section id="wrapper">

                {/* <!-- One --> */}
							<section id="one" className="wrapper spotlight style1">
                    <div className="inner">
                        <a href="#" className="image"><img src="static/images/pic01.jpg" alt="" /></a>
                        <div className="content">
                            <h2 className="major">Magna arcu feugiat</h2>
                            <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                            <a href="#" className="special">Learn more</a>
                        </div>
                    </div>
                </section>

                {/* <!-- Two --> */}
							<section id="two" className="wrapper alt spotlight style2">
                    <div className="inner">
                        <a href="#" className="image"><img src="static/images/pic02.jpg" alt="" /></a>
                        <div className="content">
                            <h2 className="major">Tempus adipiscing</h2>
                            <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                            <a href="#" className="special">Learn more</a>
                        </div>
                    </div>
                </section>

                {/* <!-- Three --> */}
							<section id="three" className="wrapper spotlight style3">
                    <div className="inner">
                        <a href="#" className="image"><img src="static/images/pic03.jpg" alt="" /></a>
                        <div className="content">
                            <h2 className="major">Nullam dignissim</h2>
                            <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                            <a href="#" className="special">Learn more</a>
                        </div>
                    </div>
                </section>

                {/* <!-- Four --> */}
							<section id="four" className="wrapper alt style1">
                    <div className="inner">
                        <h2 className="major">Vitae phasellus</h2>
                        <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
                        <section className="features">
                            <article>
                                <a href="#" className="image"><img src="static/images/pic04.jpg" alt="" /></a>
                                <h3 className="major">Sed feugiat lorem</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                <a href="#" className="special">Learn more</a>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="static/images/pic05.jpg" alt="" /></a>
                                <h3 className="major">Nisl placerat</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                <a href="#" className="special">Learn more</a>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="static/images/pic06.jpg" alt="" /></a>
                                <h3 className="major">Ante fermentum</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                <a href="#" className="special">Learn more</a>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="static/images/pic07.jpg" alt="" /></a>
                                <h3 className="major">Fusce consequat</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                <a href="#" className="special">Learn more</a>
                            </article>
                        </section>
                        <ul className="actions">
                            <li><a href="#" className="button">Browse All</a></li>
                        </ul>
                    </div>
                </section>

            </section>
        )
    }
}

export default Main