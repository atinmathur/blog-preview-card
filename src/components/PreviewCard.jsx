/* eslint-disable react/prop-types */
import styles from "./PreviewCard.module.css";

function PreviewCard({
  blogTitle,
  blogImg,
  date,
  preview,
  avatar,
  author,
  tag,
}) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={blogImg} alt="blog-illustration" />
      <div className={styles.info}>
        <span className={styles.tag}>{tag}</span>
        <span>Published {date}</span>
        <span className={styles.title}>{blogTitle}</span>
        <span className={styles.preview}>{preview}</span>
        <div className={styles.author}>
          <img src={avatar} alt="image-avatar" className={styles.avatar} />
          <span className={styles.name}>{author}</span>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
