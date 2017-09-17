/**
 * Created by Franco on 2017/9/17
 *
 */

class likeButton_2  {
    constructor (){
       this.state = {isLiked : false};
    }

    setState(state) {
        this.state = state;
        this.render();
    }

    changeText() {
       this.setState({
          isLiked : !this.state.isLiked
       });
    }

    createDomByString(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString;
        return div;
    }
    render() {
        this.el = this.createDomByString(`
          <button class="liked-button">
             <span class="liked-text">${this.state.isLiked ? '点赞':'取消'}</span>
          </button>
        `);

       this.el.addEventListener('click', this.changeText.bind(this), false);
       return this.el;
    }
}