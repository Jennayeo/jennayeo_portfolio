(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 479:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Header.js





function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderGrid, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: "Jiyoung Jenna Yeo"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavGrid, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Nav, {
        children: "About"
      }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {
        children: "Skills"
      }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {
        children: "Projects"
      }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {
        children: "Contacts"
      })]
    })]
  });
}

const HeaderGrid = (external_styled_components_default()).div`
    background-color: #212529;
    display: flex;
    width: 100%;
    height: 100px;
    // padding-top: 25px;
    // padding-bottom: 25px;
`;
const Title = (external_styled_components_default()).div`
    padding: 40px;
    font-size: 150%;
    font-family: KaushanScript;
    color: #fed136;
`;
const NavGrid = (external_styled_components_default()).div`
    float: right;
    display: flex;
    // margin-left: 100px;
    color: #FFFFFF;
`;
const Nav = (external_styled_components_default()).div`
    padding: 40px;
    font-size: 150%;
    // align-items: right;
    font-family: Montserrat-Regular;
`;
/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./shared/Images/IMG_8464.PNG
/* harmony default export */ var IMG_8464 = ({"src":"/_next/static/image/shared/Images/IMG_8464.875b2d1dbca7e1e573e72aa67dfd8c57.PNG","height":421,"width":421});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Main.js







function Main() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ProfilePic, {
      src: IMG_8464
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TitleGrid, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Main_Title, {
        children: "Frontend Developer"
      }), /*#__PURE__*/jsx_runtime_.jsx(SubTitle, {
        children: "Portfolio"
      })]
    })]
  });
}

const Container = (external_styled_components_default()).div`
    width: 100%;
    height: 800px;
    background-color: grey;
    text-align: center;
`;
const ProfilePic = external_styled_components_default()(next_image.default)`
    // --size: ${props => props.size}px;
    width: 300px;
    height: 300px;
    // border-radius: 300px;
    // background-image: src('../shared/Images/IMG_8464.PNG');
    background-size: cover;
    // background-color: black;
    padding-top: 100px;
`;
const TitleGrid = (external_styled_components_default()).div`
padding-top: 30px;
padding-bottom: 200px;
`;
const Main_Title = (external_styled_components_default()).div`
    font-size: 100px;
    font-family: Montserrat-Bold;
    color: #ffffff;
`;
const SubTitle = (external_styled_components_default()).div`
    font-size: 40px;
    font-family: Montserrat-Regular;
`;
/* harmony default export */ var components_Main = (Main);
;// CONCATENATED MODULE: ./shared/Icons/user.png
/* harmony default export */ var user = ({"src":"/_next/static/image/shared/Icons/user.33e7df0963941edbeb704322b4c04f44.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXElEQVR42kXIMQqCABQA0FdC14guEkR0hYYIulLdpEUQB6/g6iRu7g4iiHxFBHnbI8HLqHPHEU5aIZQ4ANUaBRLgKff3AMj0fr4GKdyE3ZWPMG7Cm4tGmBahdp4Bt0Qjd+RIJAEAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./shared/Icons/email.png
/* harmony default export */ var email = ({"src":"/_next/static/image/shared/Icons/email.792ef22f5eda5fbc5d933e8fa864b5d8.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAT0lEQVR42mWNsRGAIBAEt1uowBpktAciagAJzcnsBzdwTPgN/vZmfp51TgaNKo2hsVOYH0VzXUQeiaZpwU1gk2CyOMj/SdZIDDpVuiktT1873yLpblWvsAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./shared/Icons/education.png
/* harmony default export */ var education = ({"src":"/_next/static/image/shared/Icons/education.322fa99eeb869ccb7c8ecf194e130ed7.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXklEQVR42k3HsQmDUBRA0QNpU6SyigNkjQyQIVI6gI5gI9io2DiLzmJtbyN8XyVy4MLlAT4B4sj19tDLYZJuRn6Wa2d/ngaNNTQ6BW/Jpg2bpETkkMKhUgOZb8jwOgF/HSExaj2cXgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./shared/Images/jiyoung.png
/* harmony default export */ var jiyoung = ({"src":"/_next/static/image/shared/Images/jiyoung.7d68e33dee74279805a1e574e1af2975.png","height":1274,"width":1271,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AX2QnQBANigpuLO6mA8OEjkkMS4A//v2xwAOImjz59nXAbvT4inYxbrF28O6Ef8EB/8RLjsAFg4DAfgACu4QAe88AaOzwsLl29I999nP+v38+wbQ8wIAQz0x+hkMCwb97OPCAay1ufrLxccE1c3LARILBf/c398A4/b/AUo3Lv9NR0H8Aaqqo/rDwMUEytTaAcnH1P8dHRMA7e71AfYB/P+XeWD8AZ6dlMHk5eo+1tTY+qiqqgYVGB8A6+jh+i8xLAZjV0fCAaeOcykOHy/F5OrzEZuanP/M1tgAhHyGAQ0OEe739Ms8AePl4AAcGh8ptLGrmKyssDmmu8QAhHiAxzckKmjc2svXg46HkA3zCSgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./shared/Icons/home.png
/* harmony default export */ var home = ({"src":"/_next/static/image/shared/Icons/home.8f316578a9db8e0cd93c8bb2ae27ad18.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAU0lEQVR42jWKywmAQAwFB2xib4IdaL3W4XU72IM1bBV+WIcHMiQvkwSmwYBGS04kaqLa+PWSrOCM3uJK4zBeK11jzmUXPzW2XBYZPBqF7rjKoFM+J7ox0o4xsKMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./shared/Icons/github.png
/* harmony default export */ var github = ({"src":"/_next/static/image/shared/Icons/github.d3263084234dc705b2aeba515177e0f0.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAdUlEQVR42iXErQrCYBiG4Sf4AwaDYll6bjAbTOKh2DwZDcNs8SAsy8sbS2sf7DgWVt59MC64JHHk50TKHyxR0Hh0ZCMthVw7WT5n8kAtgjfyoiREuLS8ysSLEA09TzZe8yDoxI0/H3acHExcJPnO11v2VL5aMwqvI/gjeXPdAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/About.js












function about() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(About_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "About"
    }), /*#__PURE__*/jsx_runtime_.jsx(About_Title, {
      children: "\"\uC6D4\uC694\uC77C\uC774 \uC124\uB808\uB294 \uC8FC\uB2C8\uC5B4 \uAC1C\uBC1C\uC790 \uC5EC\uC9C0\uC601\uC785\uB2C8\uB2E4!\""
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Contents, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(About_ProfilePic, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: jiyoung,
          width: "400",
          height: "400"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextContents, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(TextGrid, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconBox, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(IconGrid, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(SubGrid, {
                children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
                  src: user,
                  width: "45",
                  height: "35"
                })
              }), "Jiyoung Jenna Yeo"]
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconGrid, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(SubGrid, {
                children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
                  src: education,
                  width: "40",
                  height: "40"
                })
              }), "Michigan State University"]
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconGrid, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(SubGrid, {
                children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
                  src: email,
                  width: "35",
                  height: "35"
                })
              }), "jenna.jiyoung.yeo@gmail.com"]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Blog, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(IconGrid, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(SubGrid, {
              children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
                src: home,
                width: "35",
                height: "35"
              })
            }), "jennayeo.tistory.com"]
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconGrid, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(SubGrid, {
              children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
                src: github,
                width: "35",
                height: "35"
              })
            }), "github.com/Jennayeo"]
          })]
        })]
      })]
    })]
  });
}

const About_Container = (external_styled_components_default()).div`
        width: 80%;
        // height: 500px;
        margin: 0 auto;

    `;
const About_Title = (external_styled_components_default()).div`
        font-family: NanumBrushScript-Regular;
        font-size: 3vw;
    `;
const Contents = (external_styled_components_default()).div`
        display: flex;
        text-align: center;
        margin-top: 90px;
        // margin: 80px auto auto auto;
    `;
const About_ProfilePic = (external_styled_components_default()).div`
        width: 30%;
        
    `;
const TextGrid = (external_styled_components_default()).div`
        padding: 20px;
        display: flex;
    `;
const TextContents = (external_styled_components_default()).div`
        margin-left: 100px;
        display: flex;
    `;
const IconBox = (external_styled_components_default()).div`
        padding:10px;
    `;
const IconGrid = (external_styled_components_default()).div`
        display: flex;
        font-family: NotoSansKR-Regular;
        font-size: 1.5vw;
    `;
const Blog = (external_styled_components_default()).div`
        padding-top: 60px;
    `;
const SubGrid = (external_styled_components_default()).div`
        margin-right: 10px;
    `;
const Img = (external_styled_components_default()).img`
        width: 70%;
    `;
const Text = (external_styled_components_default()).div`
        width: 50%;

    `;
const Icon = external_styled_components_default()(next_image.default)`
        margin-bottom: 50px;
    `;
/* harmony default export */ var About = (about);
;// CONCATENATED MODULE: ./shared/Images/skill.png
/* harmony default export */ var skill = ({"src":"/_next/static/image/shared/Images/skill.f12e31dab391539d6acc959a9c8fbe12.png","height":1338,"width":2508,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAa0lEQVR42gVA2wrCMAzt//+YjyL6rjCQeemytknaBj1npPf5wtPtylUWFslsrbG7c3ncabUyvTbFIgrzSm8F6gPdO2L7Ar9ACpIixpyFYwS7Kbsa1+cHe9mZYk5oq5xzUs0RVvEfHaoNIsIDOcZ6LCOi3lEAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Skills.js






function Skills() {
  return /*#__PURE__*/jsx_runtime_.jsx(Skills_Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ImgGrid, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Skills_Img, {
        src: skill
      })
    })
  });
}

const Skills_Container = (external_styled_components_default()).div`
    width: 100%;
    // height: 10%;
    background-color: #fed136;
    text-align: center;
`;
const ImgGrid = (external_styled_components_default()).div`
    // padding-top: 100px;
    width: 90%;
    padding: 100px;
    margin: 80px;
    margin-bottom: 0;
`;
const Skills_Img = external_styled_components_default()(next_image.default)`
    border-radius: 80px;

`;
/* harmony default export */ var components_Skills = (Skills);
;// CONCATENATED MODULE: ./shared/Images/Project1.png
/* harmony default export */ var Project1 = ({"src":"/_next/static/image/shared/Images/Project1.71f37f99dfc6d634b95b0d88b5663d0f.png","height":1020,"width":1188,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAzElEQVR42hXLwUrDQBQF0HvfJNOZyqi0aRQ0Rly7dCmI/qlrf0H/wI2iuAjuRdqmpbTQZDqvdHVWh8+vnyl1a4aihFqPwirs7Bdd3GkIgdkotXBHuX58vaNZRjzc3uCuKqiquLyqVcYnQxSjU9puxf+3F+7+Glb1NS6qGkmF2fdPA+dyLSdj3D8+oZycgyRFiMW6V87bNs2mU3rnIMbAe4/BwKKPUbsozDQliBiNBxUgBSJCIwab7VbFHNbxGXvJuElKGEdjBEkVYZhzD52YTwi34n1fAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./shared/Images/Project2.png
/* harmony default export */ var Project2 = ({"src":"/_next/static/image/shared/Images/Project2.7a01c46c873eb4d6659ea5fdae41f36a.png","height":1110,"width":744,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlUlEQVR42g3IqwrCUAAG4P9cnDtJECzCqga7JoNZBB9ThljNvoTBvDYEN2HuXH/PFz8R/UhGD6oSMQRIpSCHn8thoLXmpCjATI/O4fPtqYRETAnGlMDlVhMVeDifuD7uWd+vlNEG7GYrbpcVObyZbKAkAQMvNvOFeD2ewg9eiLZtaa3lVGu4GAUAou86eu+ZpYxN06Q/F9td7m8Lob4AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Projects.js









function Projects() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Projects_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Project"
    }), /*#__PURE__*/jsx_runtime_.jsx(Project, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Projects_Project1, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Projects_Title, {
          children: "SANTA - \uB4F1\uC0B0\uC740\uC0B0\uD0C0\uD83D\uDE0E"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Projects_ImgGrid, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: Project1
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Projects_Text, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "SANTA\uB294 \uD63C\uC790\uC11C\uB294 \uAC00\uAE30\uB294 \uC560\uB9E4\uD558\uACE0, \uC9C0\uC778\uB4E4\uC740 \uBC14\uBE60\uC11C \uB4F1\uC0B0\uC744 \uB9DD\uC124\uC774\uC2DC\uB294 \uBD84\uB4E4\uC744 \uC704\uD55C \uB4F1\uC0B0\uBA54\uC774\uD2B8\uB97C \uAD6C\uD560 \uC218 \uC788\uB294 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4! \uB4F1\uC0B0 \uBAA8\uC784\uC744 \uC8FC\uCD5C\uD558\uBA74 \uC2E0\uCCAD\uC790 \uC218\uB77D/\uAC70\uC808\uC774 \uAC00\uB2A5\uD558\uBA70, \uCC38\uC5EC\uC790\uB85C\uC11C \uB4F1\uC0B0\uBAA8\uC784\uC5D0 \uC2E0\uCCAD/\uCDE8\uC18C\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uCC38\uC5EC\uD588\uB358 \uBAA8\uC784\uC5D0 \uD55C\uD574\uC11C \uD6C4\uAE30\uAE00\uB3C4 \uB0A8\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uBC88 \uD504\uB85C\uC81D\uD2B8\uB97C \uD1B5\uD574 \uBC31\uC5D4\uB4DC, \uB514\uC790\uC774\uB108\uC640 \uD611\uC5C5 \uB2A5\uB825\uC744 \uAE30\uB97C \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4."
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["- \uAC1C\uBC1C\uAE30\uAC04: 2021.04.28 - 2021.05.12 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "- \uD504\uB85C\uC81D\uD2B8 \uC8FC\uC81C: \uB4F1\uC0B0 \uBA54\uC774\uD2B8 \uCEE4\uBBA4\uB2C8\uD2F0", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "- \uAC1C\uBC1C \uC778\uC6D0: \uD504\uB860\uD2B8\uC5D4\uB4DC 2, \uBC31\uC5D4\uB4DC(spring) 2, \uB514\uC790\uC774\uB108(UI/UX Wireframe) 2 ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["\u2728 \uC18C\uC15C\uB85C\uADF8\uC778 \u2714\uFE0F", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u2728 \uCEE8\uD150\uCE20 \uC5C5\uB85C\uB4DC & \uC218\uC815 & \uC0AD\uC81C\u2714\uFE0F", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u2728 \uCEE8\uD150\uCE20 \uC870\uD68C -  \uD398\uC774\uC9C0\uB124\uC774\uC158 \u2714\uFE0F", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u2728 \uBAA8\uC784 \uC2E0\uCCAD, \uC218\uB77D, \uAC70\uC808 \u2714\uFE0F", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u2728 responsive web design \u2714\uFE0F", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Projects_Project2, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Projects_Title, {
        children: "My Journey - Share your journey!"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ImgGrid2, {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: Project2
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text2, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "My Journey\uB294 \uAE00, \uC774\uBBF8\uC9C0\uB97C \uACF5\uC720\uD560 \uC218 \uC788\uB294 \uCEE4\uBBA4\uB2C8\uD2F0 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4. \uD68C\uC6D0\uAC00\uC785\uACFC \uB85C\uADF8\uC778 \uD6C4 \uC6D0\uD558\uB294 \uCEE8\uD150\uCE20 \uD3EC\uC2A4\uD305\uC774 \uAC00\uB2A5\uD558\uBA70, \uB2E4\uB978 \uC720\uC800\uC758 \uD3EC\uC2A4\uD2B8\uC5D0 \uB313\uAE00 \uB4F1\uB85D\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uBCF8\uC778\uC758 \uAE00\uC5D0 \uB2EC\uB9B0 \uCD5C\uC2E0 \uB313\uAE00\uC744 \uD655\uC778 \uD560 \uC218 \uC788\uB3C4\uB85D \uC54C\uB9BC \uAE30\uB2A5\uB3C4 \uCD94\uAC00\uD558\uC600\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC778 CRUD\uAD6C\uD604\uC774\uC9C0\uB9CC, \uC774\uBC88 \uD504\uB85C\uC81D\uD2B8\uB97C \uD1B5\uD574 \uC11C\uBC84\uB9AC\uC2A4 \uD50C\uB7AB\uD3FC\uC778  firebase\uB97C \uC0AC\uC6A9\uD574 \uBCFC \uC218\uC788\uB294 \uC88B\uC740 \uAE30\uD68C\uC600\uC2B5\uB2C8\uB2E4."
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["- \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "- \uD504\uB85C\uC81D\uD2B8 \uC8FC\uC81C: \uC774\uBBF8\uC9C0 \uAC8C\uC2DC\uBB3C \uACF5\uC720 \uCEE4\uBBA4\uB2C8\uD2F0", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "- \uAC1C\uBC1C \uAE30\uAC04: 2021.07.04 ~ 2021.07.11", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "- React + firebase \uC0AC\uC6A9", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "- \uB370\uC774\uD130 \uBCA0\uC774\uC2A4: firestore"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\u2728 \uD68C\uC6D0\uAC00\uC785, \uB85C\uADF8\uC778 - \uC815\uADDC\uC2DD \uD45C\uD604 \u2714\uFE0F", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u2728 \uCEE8\uD150\uCE20 \uD3EC\uC2A4\uD305 - \uAE00, \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC & \uC218\uC815 \u2714\uFE0F", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u2728 \uCEE8\uD150\uCE20 \uC870\uD68C -  \uBB34\uD55C \uC2A4\uD06C\uB864 \u2714\uFE0F", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u2728 responsive web design \u2714\uFE0F", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          })]
        })]
      })]
    })]
  });
}

const Projects_Container = (external_styled_components_default()).div`
    width: 100%;
    align-items: center;
    background-color: #cccccc;
    padding: 100px;
`;
const Projects_Title = (external_styled_components_default()).div`
        font-family: NanumBrushScript-Regular;
        font-size: 3vw;
        font-weight: bold;
    `;
const Project = (external_styled_components_default()).div`
    display: flex;
    // width: 100%;
    margin: auto;
    margin-bottom: 50px;
`;
const Projects_Project1 = (external_styled_components_default()).div`
    width: 90%;
    // height: 500px;
    border-radius: 80px;
    background-color: #ffffff;
    // border-radius: 26px;
    // background-color: black;
    text-align: center;
    margin: auto;
    padding:  30px 10px ;

`;
const Grid = (external_styled_components_default()).div`
    align-items: center;
    width: 100%;
    display: flex;
`;
const Projects_Text = (external_styled_components_default()).div`
    font-family: NotoSansKR-Regular;
    width: 400px;
    text-align: left;
    margin: auto;
    font-size: 1vw;
    `;
const Text2 = (external_styled_components_default()).div`
    font-family: NotoSansKR-Regular;
    width: 500px;
    text-align: left;
    margin: auto;
    margin-left: 50px;
    font-size: 1vw;
    `;
const Check = (external_styled_components_default()).div``;
const Projects_ImgGrid = (external_styled_components_default()).div`
    width: 50%;
    margin-left: auto;

`;
const ImgGrid2 = (external_styled_components_default()).div`
    width: 34%;
    margin: auto;
    padding-left: 50px;
`;
const Projects_Project2 = (external_styled_components_default()).div`
width: 90%;
    // height: 500px;
    border-radius: 80px;
    background-color: #ffffff;
    // border-radius: 26px;
    // background-color: black;
    text-align: center;
    margin: auto;
    padding:  30px 10px ;

`;
/* harmony default export */ var components_Projects = (Projects);
;// CONCATENATED MODULE: ./pages/_app.js








 // import './App.css';

function App() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Main, {}), /*#__PURE__*/jsx_runtime_.jsx(About, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Skills, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Projects, {})]
  });
}

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,675], function() { return __webpack_exec__(479); });
module.exports = __webpack_exports__;

})();