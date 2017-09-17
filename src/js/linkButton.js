/**
 * Created by Franco on 2017/9/14
 *
 */
const createDomByString = (htmString)=>{
   const div = document.createElement("div");
   div.innerHTML = htmString;
   return div;
}

class linkedButton{
    constructor() {
        this.state = {isLiked:false};
    }

    changeText() {
        this.state.isLiked = !this.state.isLiked;
        const likeText = document.querySelector(".like-text");
        likeText.innerHTML = this.state.isLiked ? "点赞" : "取消";
    }

    render() {
        this.el = createDomByString(`
                 <button class="like-button">
                    <span class="like-text">点赞</span>
                 </button>`);
        this.el.addEventListener('click', this.changeText.bind(this), false);
        return this.el;
    }
}

const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(new linkedButton().render());
