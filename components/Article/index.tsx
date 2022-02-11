import { FC } from "react";
import LinkButton from "../LinkButton";
import styles from "./Article.module.css"

export type ArticleProps = {
    title: string,
    children: string,
    url?: string,
    image: Image,
};

export type Image = {
    webP: string,
    png: string,
    alt: string,
}

const Article: FC<ArticleProps> = (props: ArticleProps) => {
    const {
        title,
        children: text,
        url,
        image,
    } = props;

    return (
        <article className={styles.article}>
            <div className={styles.articleMain}>
                <h1>{title}</h1>
                <p>{text}</p>
                {
                    url ?
                        <LinkButton href={url} target="_blank">Learn More</LinkButton>
                    : <></>
                }
            </div>
            <div className={styles.articleImage}>
                <picture>
                    <source srcSet={image.webP} type="image/webp" />
                    <img src={image.png} alt={image.alt}/>
                </picture>
            </div>
        </article>
    );
};

export default Article;