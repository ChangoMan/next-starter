
interface Props {
    // timeout: boolean;
    // onOpenArticle: (string) => void;
}

const Header = (props: Props) => (
    <>
        {/* <!-- Header --> */}
    <header id="header" className='alt'>
        <h1><a href="index.html">Test Next App</a></h1>
        <nav>
            <a href="#menu">Menu</a>
        </nav>
    </header>
    {/* <!-- Menu --> */}
        <nav id="menu">
            <div className="inner">
                <h2>Menu</h2>
                <ul className="links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="generic.html">Generic</a></li>
                    <li><a href="elements.html">Elements</a></li>
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
                <a href="#" className="close">Close</a>
            </div>
        </nav>

        {/* <!--Banner --> */}
            <section id="banner">
            <div className="inner">
                <div className="logo"><span className="icon fa-gem"></span></div>
                    <h2>This is Solid State</h2>
                    <p>Another free + fully responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
                </div>
            </section>
            </>
)

export default Header
