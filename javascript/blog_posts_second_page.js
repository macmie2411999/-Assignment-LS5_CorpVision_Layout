var contenHTML = "";

// Import Information of Articles
renderListArticles("https://wp.w3layouts.com/corpvision/2021/04/01/simple-business-solutions-has-generated-thousands-of-dollars/",
    "../image/b4.jpg", "https://wp.w3layouts.com/corpvision/category/web-development/", "Web development", 
    "Simple Business Solutions has generated thousands of dollars");

renderListArticles("https://wp.w3layouts.com/corpvision/2021/04/01/hello-world-2/", "../image/bg1-1536x1024.jpg", 
    "https://wp.w3layouts.com/corpvision/category/web-development/", "Web development", "Hello world!");

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