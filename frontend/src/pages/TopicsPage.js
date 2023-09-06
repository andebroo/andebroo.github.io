
function TopicsPage() {
    return (
       <>
            
            <h2>Web Development Concepts</h2>

            <nav class="local">  
                <a href="#webDev">Web Servers</a>
                <a href="#webDesign">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">Stylesheets</a>
              </nav>

            <article id="webDev">
                <h3>Web Servers</h3>
                <p>Most websites and servers use the file <strong>index.html</strong>. It is often called the homepage of the web application and is typically found in 
                    the root directory of the web application. Some servers might use something similar, such as index.js. The engineering department at 
                    OSU uses the Apache web server, and the default name on this software is index. This file is important because the web 
                    application is configured to return this file when a <strong>GET request</strong> is received. The file index.html for this webpage was created using
                    an HTML <strong>boilerplate</strong>, a piece of code used multiple times in a program.</p>
            
                <p>The local computer request URL is
                    file:///C:/Brooke/CS290/explorations/M1/a1-andebroo/index.html while the web server is
                    https://web.engr.oregonstate.edu/~andebroo/a1-andebroo/. Both show the request method as GET, which is used to retrieve the resource. On the local computer
                    the files are index.html, main.css, and main.js. On
                    the web server, the files are index.html, main.css, main.js, executor.js, and favicon.ico. The favicon.ico file shows up automatically from the OSU server to show
                    specific icons, such as a company logo. The web server shows a remote address that looks like an IP address with the <strong>port</strong> 443, a standard port
                    number for <strong>HTTPS</strong>. The web server has more information under the response and request headers because a request is being made to the web 
                    server.</p>
            
                <p>The favicon.ico file has a <strong>status</strong> of 200, which means the request was completed successfully. This status of 200 is because the server successfully found
                    the OSU icon and displayed it in the browser tab. The main.css and main.js files have a status of 404 because the files are not found on
                    the server. This error is known as a client error, and it is commonly found when the request is not valid and the server is not able to fulfill 
                    the request.</p>
            
                <p>A URL is a uniform resource locator that can be broken down into different parts.
                    For example, consider the engineering web server URL https://web.engr.oregonstate.edu/~andebroo/a1-andebroo/. The scheme of this URL is HTTPS,
                    which encrypts the data sent between the client and the server. The <strong>host domain</strong> is oregonstate.edu. The <strong>subdomain</strong>
                    is web.engr since it appears before the domain in the URL. In this case, there are two subdomains. The path to the resource is /~andebroo/a1-andebroo/ since it refers
                    to the specific path or file that the web server is accessing. The <strong>resource</strong> is a1-andebroo.</p>
            </article>

            <article id="webDesign">
                <h3>Frontend Design</h3>
                <p><strong>Frontend design</strong> combines aspects of software development and design to create the best user experience. Frontend design includes how the page looks and how
                    the user interacts with it. This field changes constantly with new technology, new trends, and new expectations from the user. A large aspect of
                    frontend design is <strong>usability</strong>, a combination of multiple components that make up a user's experience when interacting with a product or
                    system. To understand all the different elements of frontend design, consider a website. The <strong>visual design</strong> of the website should have a consistent color and
                    typography scheme, consistent fonts, and a navigation system. The website should also have an icon, photography, an illustration  scheme, and may also include
                    media. The <strong>GUI</strong>, or graphical user interface, may help the user navigate the websites through graphical icons. Navigation is important since the user
                    will want to locate their desired point with ease. The three issues of usability are response time,
                    content depth levels, and the use of input devices. The response time is important for user enjoyment, so web designers can add features based on the estimated response time.
                    As a good rule of thumb, delays of 2 to 10 seconds should display a busy cursor, while delays longer than 10 seconds should display a progress bar. Designers should use
                    breadcrumbs to reduce content depth levels and should consider the impact each different device will have on the website or application.
                    As stated earlier, usability refers to the user's experience and is made up of the five E's shown below.</p>

                <dl>
                    <dt><strong>Effectiveness</strong></dt>
                    <dd>Users are able to obtain accurate results when completing the desired task.</dd>
                    <dt><strong>Efficiency</strong></dt>
                    <dd>Users can perform the desired task in a reasonable amount of time with the least number of steps.</dd>
                    <dt><strong>Ease of navigation</strong></dt>
                    <dd>Users, including new users, can find their desired location or need quickly and easily.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Users are able to complete the desired task without problems or roadblocks.</dd>
                    <dt><strong>Enjoyableness</strong></dt>
                    <dd>Users have a pleasant experience and a positive attitude toward the product or software.</dd>
                </dl>

                <p>Page-layout tags help break up content into readable blocks. A newline, or line break, is shown before and after the page-layout tags when displayed in a browser.
                    Other than creating space to break up content, page-layout tags don't add more visual style to the content. The <strong>header</strong> element shows the banner. It
                    usually shows the name, publisher, and marketing slogan of the product or business. The header is the same throughout the entire website or application to ensure
                    the user knows they are still on the same website or application. The <strong>NAV</strong> element is used to take the user to a different page and is used repeatedly
                    throughout the software product. One example of navigation is the main menu on a clothing store website. The <strong>main</strong> element is the primary block that
                    contains the content of the website or application, such as a picture gallery. The <strong>section</strong> element groups similar content together.
                    This element is used to group content that is related, such as a recipe blog with sections for breakfast, lunch, and dessert recipes. The <strong>article</strong>
                    element is used within a section element to identify a single topic and is marked with ID selectors. For example, a recipe blog will have an article for the lemon bar
                    recipe within the dessert section. The <strong>footer</strong> element holds the legal information needed for the product, such as links to critical pages, contact
                    information, and a copyright symbol. The <strong>DIV</strong> element is used as a placeholder for content that changes. While it can be used to break up content, it has
                    style. The <strong>aside</strong> element is used when content relates to an article and appears on the left or right side of the article with a different design style. Similarly,
                    the <strong>figure</strong> element represents content around an image or figure with an optional caption. The <strong>blockquote</strong> element is used for long
                    quotations, typically longer than a paragraph. The <strong>link</strong> element
                    can be used in the head section to specify the relationship between a document and an external source. The <strong>anchor</strong> element is used to link different types of content with the HREF attribute, which is explained below.</p> 

                <ol>
                    <li>The anchor element can create a link to external content. The HREF attribute specifies the URL, or path, that the hyperlink will take the
                        user to. Linking to external content is accomplished using absolute paths, which are simply an exact URL to a resource. </li>
                    <li>The anchor element can create a link to internal content on the same page. With an ID attribute within the article tag, the anchor element
                        HREF attribute is able to point the user to a specified article on the same page. Linking to internal content is accomplished through a relative path, a
                        location relative to the file.</li>
                    <li>The anchor element can create a link to another page on the same website or application. This global navigation block is created
                        by using an ID attribute within the article tag and an anchor element with the HREF attribute inside a nav element. This allows the user to move from page to
                        page. Linking to other pages is also accomplished through a relative path.
                    </li>
                </ol>

            </article>

            <article id="images">
                <h3>Optimizing Images</h3>
                <p>For websites to load quickly and web servers to maintain adequate space, images must be optimized for online viewing. An optimized image in the foreground of a website needs
                    to be marked with the <strong>img</strong>, <strong>figure</strong>, and <strong>figcaption</strong> tags while also meeting six specifications.
                    The specifications are a descriptive file name, a small file size, exact dimensions, the correct file format, reduced resolution, and color mode. The file name needs to
                    be descriptive to improve SEO, or search engine optimization. The file name should include who, what, where, and when with regards to the image while maintaining a
                    concise file name. For example, my second photo on my gallery page has the file name dog-hike-red-rocks.jpg. The file size needs to be small without reducing
                    the visual quality of the image. Image compression can achieve this, specifically lossy or lossless compression.
                    Lossy compression discards some of the data and results in pixelation while lossless compression maintains the visual quality of the image. High resolution images can be
                    served using the srcset="" and sizes=""attributes, but this is only done to high resolution devices.</p>
                <p>The optimized image needs to have exact dimensions through cropping. Reducing the size of the image allows it to load quicker. The correct file format is also
                    important when optimizing an image. Online photos are typically saved in .JPG, line art images are saved in .GIF, .PNG, and .SVG, and graphics that need true 
                    transparency are 24-bit .PNG files. The resolution of the image needs to cover a range of devices. Older monitors render 72 ppi, pixels per inch. Today, monitors
                    can render between 72 or 300+ ppi. This large range requires the website developer to provide multiple sizes of the image. Images, text, and logos all have color that 
                    can be represented in multiple ways. Developers can use one of the following color modes: names, hexadecimal , RGB, and HSL. There are 256 pre-defined HTML colors that have names,
                    such as the color named Blue. Hexadecimal colors are 2-digit values for red, green, and blue with a hashtag, such as the lime green color #BAF26B. RBG stands for red, green,
                    and blue, and this color mode can create thousands of color combinations. HSL stands for hue, saturation, and luminosity/lightness. An example of an HSL color is 
                    hsl(85, 84, 68) for the lime green color mentioned earlier. These color modes, along with an image, can help a developer or company choose the color scheme to use
                    across their website.
                </p>
                <p>Line art is an image that has distinct lines or curves against a background. This type of image needs to be optimized like all other images on a website, and it
                    needs to be in the correct file format. The correct file format for line art are .GIF, .PNG, and .SVG. SVG stands for Scalable Vector Graphics and these files are
                    for two-dimensional or animated images. .GIF files are typically used for animation and short videos, and can have 8-bit transparency. .PNG files have true
                    transparency and are typically best for line art and solid colors. .PNG files are able to be placed over different colors without distorting the image. Each file format
                    has different strengths for line art files.
                </p>
            </article>

            <article id="favicons">
                <h3>Favicons</h3>
                    <p>Favicons are small favorite icons, also known as touch icons. These icons help a user quickly identify the page on their browser tab to ensure they are in the right
                        place. These icons need to show up in a browser tab on a user's cell phone, laptop, or tablet so it is important to display the symbol in the right file type and size.
                        The different favicon file types are .GIF, .PNG, .ICO, and .SVG. While .ICO is an older file format mainly used for Internet Explorer, the more common file formats
                        found today are .PNG and .SVG. A small image or symbol, such as a brand logo, will be modified into different files to work on different browsers and devices and saved to
                        the root directory of the web server. When the website
                        runs, the browser grabs the location of the favicon file and displays the image in the browser tab. This favicon file can be bookmarked or added to a favorites list 
                        at the request of the user. As technology improves, so do the standards for favicons. As the resolution of devices increases, favicons need to continue to meet new
                        standards and requirements.</p>
            </article>

            <article id="css">
                <h3>Cascading Stylesheets</h3>
                    <p> <strong>CSS</strong>, short for Cascading Stylesheets, help web developers redefine the structure provided by HTML. CSS helps improve readability and usability. Stylesheets
                        are important to websites and mobile applications because it helps the user understand, navigate, and enjoy the software product. By using stylesheets, usability is improved
                        so the user can have a consistent and efficient experience while using the software.
                        Readability and legibility increases by having contrasting colors for texts and backgrounds. Stylesheets also help web developers adhere to brand requirements, such as using
                        colors specified by in RGBa or using a particular font for headings.
                    </p>
                    <p> There are five different ways to incorporate styles in web development. Web developers can use <strong>external</strong> CSS rules. Redefining an element's selector
                        to change the style is done through multiple external files with a .css extension linked into the global head area of a website. This can also be accomplished by
                        importing a .css file, such as @import "main.css";. This is the most efficient method to use when incorporating style. Another method is to embed
                        a style directly into HTML and JavaScript files. Style can be
                        incorporated by inline within an element and JavaScript template literals. Additionally, style can be incorporated by manipulating the Document Object Model, <strong>DOM</strong>,
                        in JavaScript. These methods are typically utilized for one-off style changes rather than the style of an entire website.
                    </p>
                </article>
                </>
    );
}
export default TopicsPage;