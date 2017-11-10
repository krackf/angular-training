export class Article {
    title: string;
    link: string;
    votes: number;
    constructor(title: string , link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    votesUp() {
        this.votes++;
        return false;
        // si pas le return false => rafraichissement de la page
    }
    votesDown() {
        this.votes--;
        return false;
    }
}