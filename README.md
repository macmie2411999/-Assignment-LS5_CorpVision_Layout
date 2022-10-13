# Project CorpVision
We Will Solve Your Issues Our Vision To Your Future <br>
Embracing Success Do Our Best, Need Best Advices <br>
Digital Transformation Driven By Technology <br>
For Those Who Believe In Leaving A Mark <br>

## LINK DEMO
<div align="center">
[](https://jira-project.herokuapp.com)
</div>

## HÌNH ẢNH DEMO
<p align="center">
<img src=""></img>
</p>

## VIDEO DEMO
<div align="center">
[![]()]()
</div>

### THÀNH VIÊN
Nhóm gồm 2 thành viên:

- Cao Đức Mạnh (MacMie)
  Tạo HEADER và FOOTER dùng chung có các pages
  Pages: contact,blog pots, 404
  
- Nguyễn Tuấn
  Pages: about, services, element pages

## BASE
```scss
// Base 
$text-c1-primary:#009f4d;

body {
    padding: 0.5;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
}
```

## HEADER
```html
<!-- HEADER -->
    <header class="header fixed-top">
        <div class="container_header">
            <!-- NAVBAR -->
            <nav class="navbar navbar-expand-lg bg-light bg-transparent">
                <div class="container-fluid">
                    <!-- LOGO -->
                    <h1>
                        <a class="brand_company">
                            <span class="logo fa fa-align-right"></span>
                            Corp Vision
                            <span class="content_logo">Vision to your Future</span>
                        </a>
                    </h1>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse item-navbar" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SERVICE</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    PAGES
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="blog_posts_page.html">BLOG POSTS</a></li>
                                    <li><a class="dropdown-item" href="404_page.html">404 PAGE</a></li>
                                    <li><a class="dropdown-item" href="single_landing_page.html">LANDING PAGE</a></li>
                                    <li><a class="dropdown-item" href="elements_page.html">ELEMENT PAGE</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact_page.html">CONTACT</a>
                            </li>
                        </ul>

                        <!-- SEARCH -->
                        <div class="header-search ">
                            <div class='control'>
                                <div class='btn-material'>
                                    <i class='fa fa-search icon-material-search search-icon'></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <!-- Image and Text in Header -->
    <section class="image-text-center">
        <div class="container-image-text">
            <div class="container-text-center py-lg-5 py-md-4">
                <div class="pt-md-5 pt-4">
                    <h2 class="title-page">
                        Type Title Page Here</h2>
                    <p class="content-title-page mt-2">
                        Type Content of Title Page Here </p>
                </div>
            </div>
    
            <div class="over-layout"></div>
        </div>
    </section>
    <!-- HEADER END -->
```
    
## FOOTER
```html
<!-- FOOTER -->
    <footer class="footer">
        <div class="footer_embrace py-5">
            <div class="footer_container py-md-4">
                <div class="row">
                    <div class="col-lg-4 col-md-6 column_corp_vision">

                        <div class="footer_logo mb-4">
                            <a class="brand_company" href="home_page.html">
                                <span class="logo fa fa-align-right"></span>
                                Corp Vision
                                <span class="content_logo">Vision to your Future</span></a>
                        </div>

                        <p class="content_company" >Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
                            tempufddfel. Lorem ipsum dolor sit amet Semper at elit team advisors.</p>

                        <div class="mt-md-4 mt-3">
                            <a href="https://www.facebook.com" class="facebook"><span class="fab fa-facebook-square"></span></a>

                            <a href="https://twitter.com" class="twitter"><span class="fab fa-twitter-square"></span></a>

                            <a href="https://instagram.com" class="instagram"><span class="fab fa-instagram-square"></span></a>

                            <a href="https://in.linkedin.com" class="linkedin"><span class="fab fa-linkedin-in"></span></a>
                        </div>

                    </div>

                    <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                        <h6 class="name_column">Contact Info </h6>

                        <p class="content_contact_info mb-2">
                            Address : Corp Vision, 343 marketing, #21 cravel 1st lane street, NY - 62617. </p>

                        <p class="content_contact_info mb-2">Phone Number : <a href="tel:+1(21) 234 4567">
                                +1(21) 234 4567</a></p>

                        <p class="content_contact_info mb-2">Email : <a href="mailto:info@example.com">
                                info@example.com</a></p>

                        <p class="content_contact_info mb-2">Support : <a href="mailto:info@support.com">
                                info@support.com</a></p>

                    </div>

                    <div class="col-lg-2 col-md-6 col-sm-5 col-6 mt-lg-0 mt-5 column_categories">
                        <div id="categories-4" class="widget_categories">
                            <h6 class="name_column">Categories</h6>
                            <ul>
                                <li class="cat-item cat-item-2"><a href="#">Marketing
                                        Strategy</a>
                                </li>
                                <li class="cat-item cat-item-3"><a href="#">Startup
                                        Business</a>
                                </li>
                                <li class="cat-item cat-item-4"><a href="#">Web
                                        development</a>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 col-sm-5 col-6 mt-lg-0 mt-5 column_meta">
                        <div id="meta-4" class="widget_meta">
                            <h6 class="name_column">Meta</h6>
                            <ul>
                                <li><a href="#">Log in</a></li>
                                <li><a href="#">Entries feed</a></li>
                                <li><a href="#">Comments feed</a></li>
                                <li><a href="#">WordPress.org</a></li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- COPY RIGHT -->
        <section class="copyright text-center">
            <div class="copyright_container">
                <p class="content_copyright">&copy; 2022 Corp Vision All Rights Reserved |
                    WordPress Theme by <a href="#">
                        W3Layouts. </a>
                </p>
            </div>
        </section>

    </footer>
    <!-- FOOTER END -->
```




