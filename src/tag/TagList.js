import {observable, action} from 'mobx';
import {fromPromise} from "mobx-utils";

class TagListStore {
    @observable tags = ["kappa", "pride"]

    @action setTags(tags) {
        this.tags = [...tags]
    }

    @action getTags = () => fromPromise(fetch("http://localhost:3001/api/tags").then(res => (
    //this.tags = this.setTags(res.tags)
    res.json())).then(json => {
        console.log(json.tags)
        this.setTags(json.tags)
    }))

    // this.tags = this.setTags()

}
const store = window.store = new TagListStore();

export default store;
