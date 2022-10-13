var contenHTML = "";

// Import Information of Articles
renderListArticles("https://wp.w3layouts.com/corpvision/2021/04/01/hello-world/", "../image/blog1.jpg",
    "https://wp.w3layouts.com/corpvision/category/startup-business/", "Startup Business", "Hello world");

renderListArticles("https://wp.w3layouts.com/corpvision/2021/04/01/companies-in-ny-launched-a-joint-project-on-a-three-tower-hall/",
    "../image/blog2.jpg", "https://wp.w3layouts.com/corpvision/category/startup-business/", "Startup Business",
    "Companies in NY launched a joint project on a three-tower hall");

renderListArticles("https://wp.w3layouts.com/corpvision/2021/04/01/design-breakthrough-upgrades-the-product-and-ready-to-launch/",
    "../image/blog3.jpg", "https://wp.w3layouts.com/corpvision/category/marketing-strategy/",
    "Marketing Strategy", "Design breakthrough upgrades the product and ready to launch");

renderListArticles("https://wp.w3layouts.com/corpvision/2021/04/01/the-fledgling-company-builds-its-business-around-ac-motors/",
    "../image/b3.jpg", "https://wp.w3layouts.com/corpvision/category/web-development/",
    "Web development", "The fledgling company builds its business around AC motors");

renderListArticles("https://wp.w3layouts.com/corpvision/2021/04/01/business-opportunity-in-developing-a-reliable-electric-motor/",
    "../image/blog5-720x480.jpg", "https://wp.w3layouts.com/corpvision/category/startup-business/",
    "Startup Business", "Business opportunity in developing a reliable electric motor.");

renderListArticles("https://wp.w3layouts.com/corpvision/2021/04/01/how-to-start-a-profitable-home-based-business-within-mins/",
    "../image/blog4-720x480.jpg", "https://wp.w3layouts.com/corpvision/category/marketing-strategy/",
    "Marketing Strategy", "How to start a profitable home-based business within mins?");

/**
 * This function returns content of all articles in Blogs Posts Page
 * @param {*} linkTopArticle 
 * @param {*} srcImage 
 * @param {*} linkBottomArticle 
 * @param {*} tagBottomArticle 
 * @param {*} tagNameBodyCard 
 * @param {*} linkAuthor 
 */
function renderListArticles(linkTopArticle, srcImage, linkBottomArticle, tagBottomArticle, tagNameBodyCard) {
    contenHTML += `
                <div class="item col-lg-4 col-md-6">
                <article class="article-item">
                    <div class="article-item-content">
                        <div class="card">
                            <div class="card-header p-0 position-relative">
                                <a href=${linkTopArticle}
                                    class="zoom d-block">

                                    <a class="inner-a" href=${linkTopArticle}
                                        aria-hidden="true" tabindex="-1">
                                        <img width="556" height="371" src=${srcImage}
                                            class="image-item" alt="" /> </a>
                                </a>
                            </div>
                            <div class="card-body">
                                <div
                                    class="card-body-content d-flex justify-content-between mb-1 align-items-center">
                                    <p><a href=${linkBottomArticle}
                                            rel="category tag">${tagBottomArticle}</a></p>
                                </div>
                                <a href=${linkTopArticle}
                                    class="link-below">${tagNameBodyCard} </a>
                            </div>
                            <div class="card-footer">
                                <div class="author align-items-center">

                                    <a href="https://wp.w3layouts.com/corpvision/author/w3layouts/"
                                        class="author-link">
                                        <img src="../image/iconW3.jpeg"
                                            alt="" class="">
                                    </a>
                                    <ul><li><span>by</span><a href="#author"> 
                                        <a href="https://wp.w3layouts.com/corpvision/author/w3layouts/">W3Layouts</a></span></a>
                                        </li>
                                    </ul>

                                    <div class="date">
                                        <p>April 1, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </article>
            </div>
        `
}

document.querySelector(".row").innerHTML = contenHTML;