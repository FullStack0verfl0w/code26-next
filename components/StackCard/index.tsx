import { FC } from "react";
import styles from "./StackCard.module.css";

export type StackCardProps = {
    title: string,
    id?: string,
    color?: string,
    stack?: StackCardProps[],
};

const StackCard: FC<StackCardProps> = (props: StackCardProps) => {
    const { title, id, color, stack } = props;

    return (
        <div className={styles.stackCard} id={id}>
            <h1 className={styles.stackCardHeader} style={{backgroundColor: color}}>{title}</h1>
            { stack ?
                <ul className={styles.stackCardList}>
                    {
                        stack.map((val) => {
                            return <li className={styles.stackCardListItem} key={val.title}>{val.title}</li>
                        })
                    }
                </ul>
                : <></>
            }
        </div>
    );
};

export default StackCard;