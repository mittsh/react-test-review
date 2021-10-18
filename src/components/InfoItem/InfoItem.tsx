import React from 'react';
import { Item } from '../../utils/data';
import { useStyles } from './InfoItem.styles';

export interface Props {
  data: Item;
  highlight?: string;
}

const InfoItem: React.FC<Props> = ({
    data: { id, name, description, link },
    highlight,
}) => {
    const styles = useStyles();
    const highlightedExp = RegExp(highlight, 'ig');
    const getDividedText = (item) => {
        const parts = item.split(highlightedExp);
        const matchedHighlight = item.match(highlightedExp);
        return (
            <span>
                {parts.map((part, index) => {
                    return (
                        <span key={`${id}-${index}`}>
                            {part}
                            <em className={styles.highlighted}>{matchedHighlight[index]}</em>
                        </span>
                    );
                })}
            </span>
        );
    };

    return (
        <>
            {Boolean(name) && (
                <div className={styles.title}>
                    {highlight && highlightedExp.test(name) ? getDividedText(name) : name}
                </div>
            )}
            {Boolean(description) && (
                <div>
                    {highlight && highlightedExp.test(description)
                        ? getDividedText(description)
                        : description}
                </div>
            )}
            {Boolean(link) && (
                <a target="_blank" href={link}>
                    {highlight && highlightedExp.test(link) ? getDividedText(link) : link}
                </a>
            )}
        </>
    );
};

export default InfoItem;
