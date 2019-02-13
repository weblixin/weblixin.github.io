function fullPage() {
  const fullPage = document.getElementsByClassName("full_page")[0];
  const fullPageItems = fullPage.getElementsByClassName("full_page_item");
  const sliderTab = document.getElementsByClassName("slider_tab")[0];
  const sliderTabItems = document.getElementsByTagName("li");
  const sliderTabDivs = document.getElementsByClassName("small_tab");
  const sliderTabImgs = sliderTab.getElementsByTagName("img");
  const nextPage = document.getElementsByClassName("next_page")[0];
  
  let pageIndex = 0, pageScroll = true, prevIndex = 0;
  
  document.onmousewheel = mouseWheel;
  document.addEventListener("DOMMouseScroll", mouseWheel)

  // 点击箭头，实现下一页
  nextPage.onclick = scrollDown

  sliderTabClick()

  // 滚轮事件
  function mouseWheel(e) {
    if(e.wheelDelta) {
      if(e.wheelDelta > 0) {
        scrollUp()
      } else {
        scrollDown()
      }
    } else {
      if(e.detail > 0) {
        scrollDown()
      } else {
        scrollUp()
      }
    }
  }

  // 上滑
  function scrollUp() {
    if(pageIndex > 0 && pageScroll) {
      prevIndex = pageIndex;
      pageIndex --;
      srcollToPage(pageIndex, prevIndex)
    } else if(pageIndex <= 0) {
      pageIndex = 0
    }
  }

  // 下滑
  function scrollDown() {
    if(pageIndex < fullPageItems.length - 1 && pageScroll) {
      prevIndex = pageIndex;
      pageIndex ++;
      srcollToPage(pageIndex, prevIndex)
    } else if(pageIndex >= fullPageItems.length - 1) {
      pageIndex = fullPageItems.length - 1
    }
  }

  // 滚动到对应页
  function srcollToPage(pageIndex, prevIndex) {
    fullPage.style.top = - pageIndex * 100 + "%";
    fullPage.style.transition = `all ease-in ${(Math.abs(pageIndex - prevIndex) - 1)/2 + .3}s`
    sliderTabSelect(pageIndex)
    pageScroll = false
    scrollTimer()
    if(pageIndex == sliderTabItems.length -1) {
      nextPage.style.opacity = "0"
    } else {
      nextPage.style.opacity = "1"
    }
  }

  // 定时器 解决函数连续执行
  function scrollTimer() {
    setTimeout(function() {
      pageScroll = true
    }, 500)
  }

  // 页面滚动，导航对应变化
  function sliderTabSelect(index) {
    for(let i = 0; i < sliderTabDivs.length; i ++) {
      sliderTabDivs[i].classList.remove("active");
      sliderTabImgs[i].classList.remove("select");
    }
    sliderTabDivs[index].classList.add("active");
    sliderTabImgs[index].classList.add("select")
  }

  // 点击导航，页面滚动
  function sliderTabClick() {
    for(let i = 0; i < sliderTabItems.length; i ++) {
      sliderTabItems[i].onclick = function () {
        if(i > pageIndex) {
          fullPage.style.top = - (i - 1) * 100 + "%";
        } else {
          fullPage.style.top = - (i + 1) * 100 + "%";
        }
        srcollToPage(i, pageIndex)
        pageIndex = i
      }
    }
  }
}

