import { useState } from 'react';
import Link from 'next/link'
import Image from "next/legacy/image";
import menu from "../../../data/desktop-menu/menu.json";

const activeCategorySlug = menu.activeCategorySlug;

const Nav = ({posts}) => {

    const defaultData = posts.filter(
        (post) => post.primaryCategory.slug === activeCategorySlug
    ).slice(0, 4);

    const [tabPostData, setTabPostData] = useState(defaultData);

    return (
        <ul className="mainmenu">
            <li className="menu-item-has-children">
                <Link legacyBehavior href="/">
                    <a aria-label='Ir a pagina de inicio'>Inicio</a>
                </Link>
            </li>
            <li className="menu-item-has-children">
                <Link href="/">
                    Tecnologia
                </Link>
                <ul className="axil-submenu">
                    <li>
                        <Link legacyBehavior href="/articulo/beauty-of-deep-space-billions-of-galaxies-in-the-universe.">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Standard">Post Format Standard</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/articulo/flutter-the-good-the-bad-and-the-ugly">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Video">Post Format Video</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/articulo/fashion-young-handsome-man-in-casual-watch">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Gallery">Post Format Gallery</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/articulo/lightweight-grippable-and-ready-to-go">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Audio">Post Format Audio</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/articulo/new-freehand-templates-built-for-the-whole-team">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Quote">Post Format Quote</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="menu-item-has-children megamenu-wrapper">
                <Link href="#">
                    Gadgets
                </Link>
                <ul className="megamenu-sub-menu">
                    <li className="megamenu-item">
                        {/* Start Verticle Nav  */}
                        {/* Start Verticle Nav  */}
                        {/* Start Verticle Menu  */}
                        <div className="axil-vertical-nav-content">
                            {/* Start One Item  */}
                            <div className="axil-vertical-inner tab-content">
                                <div className="axil-vertical-single">
                                    <div className="row">
                                        {tabPostData.map((activePost) => (
                                            <div className="col-lg-3" key={activePost.slug}>
                                                <div className="content-block image-rounded">
                                                    <div className="post-thumbnail mb--20">
                                                    <Link href={`/articulo/${activePost.slug}`}>
                                                        <Image
                                                            src={activePost.featuredImage.sourceUrl}
                                                            alt={activePost.featuredImage.altText}
                                                            height={130}
                                                            width={200}
                                                            priority={true}
                                                        />
                                                    </Link>
                                                    </div>
                                                    <div className="post-content">
                                                        <div className="post-cat">
                                                            <div className="post-cat-list">
                                                            <Link legacyBehavior href={`/category/${activePost.primaryCategory.slug}`}>
                                                                <a className="hover-flip-item-wrapper">
                                                                <span className="hover-flip-item">
                                                                    <span data-text={activePost.primaryCategory.name}>
                                                                    {activePost.primaryCategory.name}
                                                                    </span>
                                                                </span>
                                                                </a>
                                                            </Link>
                                                            </div>
                                                        </div>
                                                        <h5 className="title">
                                                            <Link href={`/articulo/${activePost.slug}`}>
                                                                {activePost.title}
                                                            </Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* End One Item  */}
                        </div>
                        {/* End Verticle Menu  */}
                    </li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <Link href="/">
                    Programacion
                </Link>
                <ul className="axil-submenu">
                    <li>
                        <Link legacyBehavior href="/post-list">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post List">Post List</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/category/design">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Archive">Post Archive</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/author/rose-mary">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Author Page">Author Page</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/about">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="About Page">About Page</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/contact">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Contact Us">Contact Us</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/404">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="404 Page">404 Page</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/maintenance">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Maintenance">Maintenance</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/privacy-policy">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Privacy Policy">Privacy Policy</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <Link href="/">
                    Diseño Web
                </Link>
            </li>
        </ul>
    );
}

export default Nav;
