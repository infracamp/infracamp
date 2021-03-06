
/**
 *
 * @param selector
 * @return {KasimirForm}
 */
function ka_form(selector) {
    if (selector instanceof KasimirForm)
        return selector;
    let elem = document.getElementById(selector);
    if (elem === null)
        throw `Selector '${selector}' not found (no element mit id)`;
    if (elem instanceof KasimirForm) {
        return elem;
    }
    throw `Selector '${selector}' is not a <form is="ka-form"> element`;
}




class KasimirForm extends HTMLFormElement {


    constructor() {
        super();
        this._data = {};
        this.params = {
            "debounce": 200
        };
        this._debounder = null;
        this._formEls = [];

        var self = this;
        this.addEventListener("submit", (e) => {
            e.stopPropagation();
            e.preventDefault();
        });
    }


    _updateElCon() {
        for (let el of this.querySelectorAll("input,select,textarea")) {

            this._formEls.push(el);
            if (el._kasiFormI === true)
                continue;
            el._kasiFormI = true;
            if (el instanceof HTMLSelectElement) {
                el.addEventListener("change", (e) => {
                    this.dispatchEvent(new Event("change"));
                });
            } else {
                el.addEventListener("keyup", (e) => {
                    window.clearTimeout(this._debounder);
                    if (e.key === "Enter") {
                        return;
                    }
                    this._debounder = window.setTimeout(() => {this.dispatchEvent(new Event("change"))}, this.params.debounce)
                })
            }
        }
    }



    /**
     * Get the form data as object with key-value pair
     *
     * ```
     * Example:
     *
     * let data = ka_form("formId").data;
     * for (let key in data)
     *      console.log (`data[${name}]=${data[name]}`);
     * ```
     *
     * @return {object}
     */
    get $data() {
        let getVal = (el) => {
            switch (el.tagName) {
                case "INPUT":
                    switch (el.type) {
                        case "checkbox":
                        case "radio":
                            if (el.checked == true)
                                return el.value;
                            return null;
                    }
                case "SELECT":
                case "TEXTAREA":
                    return el.value;
            }
        };

        for (let el of this._formEls) {
            if (el.name === "")
                continue;
            this._data[el.name] = getVal(el);
        }
        return this._data;
    }

    /**
     * Set the data form form as object
     *
     * ```
     * ka_form("formId").data = {
     *     "name1": "val1"
     * }
     * ```
     *
     * @param {object} newData
     */
    set $data (newData) {
        this._data = newData;
        for (let el of this._formEls) {
            let cdata = newData[el.name];
            if (el.tagName === "INPUT" && el.type === "checkbox" || el.type === "radio") {
                if (cdata === el.value) {
                    el.checked = true;
                } else {
                    el.checked = false;
                }
            } else {
                el.value = cdata;
            }
        }
    }

    disconnectedCallback() {
        this._observer.disconnect();
    }

    connectedCallback() {

        this._observer = new MutationObserver((e) => {
            this._updateElCon();
        });
        this._observer.observe(this, {childList: true, subtree: true});
        this._updateElCon();
    }


}

customElements.define("ka-form", KasimirForm, {extends: "form"});

class KasimirSelect {

}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uLmpzIiwia2FzaW1pci1mb3JtLmpzIiwia2FzaW1pci1zZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJrYXNpbWlyLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHJldHVybiB7S2FzaW1pckZvcm19XG4gKi9cbmZ1bmN0aW9uIGthX2Zvcm0oc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBLYXNpbWlyRm9ybSlcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICAgIGlmIChlbGVtID09PSBudWxsKVxuICAgICAgICB0aHJvdyBgU2VsZWN0b3IgJyR7c2VsZWN0b3J9JyBub3QgZm91bmQgKG5vIGVsZW1lbnQgbWl0IGlkKWA7XG4gICAgaWYgKGVsZW0gaW5zdGFuY2VvZiBLYXNpbWlyRm9ybSkge1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgdGhyb3cgYFNlbGVjdG9yICcke3NlbGVjdG9yfScgaXMgbm90IGEgPGZvcm0gaXM9XCJrYS1mb3JtXCI+IGVsZW1lbnRgO1xufSIsIlxuXG5cblxuY2xhc3MgS2FzaW1pckZvcm0gZXh0ZW5kcyBIVE1MRm9ybUVsZW1lbnQge1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgICAgICAgIFwiZGVib3VuY2VcIjogMjAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2RlYm91bmRlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2Zvcm1FbHMgPSBbXTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBfdXBkYXRlRWxDb24oKSB7XG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMucXVlcnlTZWxlY3RvckFsbChcImlucHV0LHNlbGVjdCx0ZXh0YXJlYVwiKSkge1xuXG4gICAgICAgICAgICB0aGlzLl9mb3JtRWxzLnB1c2goZWwpO1xuICAgICAgICAgICAgaWYgKGVsLl9rYXNpRm9ybUkgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBlbC5fa2FzaUZvcm1JID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fZGVib3VuZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWJvdW5kZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSl9LCB0aGlzLnBhcmFtcy5kZWJvdW5jZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBkYXRhIGFzIG9iamVjdCB3aXRoIGtleS12YWx1ZSBwYWlyXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogbGV0IGRhdGEgPSBrYV9mb3JtKFwiZm9ybUlkXCIpLmRhdGE7XG4gICAgICogZm9yIChsZXQga2V5IGluIGRhdGEpXG4gICAgICogICAgICBjb25zb2xlLmxvZyAoYGRhdGFbJHtuYW1lfV09JHtkYXRhW25hbWVdfWApO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldCAkZGF0YSgpIHtcbiAgICAgICAgbGV0IGdldFZhbCA9IChlbCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIklOUFVUXCI6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZWwudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmFkaW9cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuY2hlY2tlZCA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiU0VMRUNUXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIlRFWFRBUkVBXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLl9mb3JtRWxzKSB7XG4gICAgICAgICAgICBpZiAoZWwubmFtZSA9PT0gXCJcIilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMuX2RhdGFbZWwubmFtZV0gPSBnZXRWYWwoZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGF0YSBmb3JtIGZvcm0gYXMgb2JqZWN0XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBrYV9mb3JtKFwiZm9ybUlkXCIpLmRhdGEgPSB7XG4gICAgICogICAgIFwibmFtZTFcIjogXCJ2YWwxXCJcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmV3RGF0YVxuICAgICAqL1xuICAgIHNldCAkZGF0YSAobmV3RGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5fZm9ybUVscykge1xuICAgICAgICAgICAgbGV0IGNkYXRhID0gbmV3RGF0YVtlbC5uYW1lXTtcbiAgICAgICAgICAgIGlmIChlbC50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgZWwudHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGVsLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgIGlmIChjZGF0YSA9PT0gZWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwudmFsdWUgPSBjZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRWxDb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcywge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xuICAgICAgICB0aGlzLl91cGRhdGVFbENvbigpO1xuICAgIH1cblxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImthLWZvcm1cIiwgS2FzaW1pckZvcm0sIHtleHRlbmRzOiBcImZvcm1cIn0pOyIsIlxuY2xhc3MgS2FzaW1pclNlbGVjdCB7XG5cbn1cblxuIl19
