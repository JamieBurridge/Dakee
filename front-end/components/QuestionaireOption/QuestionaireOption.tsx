import styles from "./QuestionaireOption.module.scss";

interface QuestionaireOptionInterface {
  text: string;
  icon?: string;
}

export default function QuestionaireOption({
  text,
  icon,
}: QuestionaireOptionInterface) {
  return (
    <div className={styles.questionaire_option}>
      {icon && <img src={icon} alt={`${text} icon`} />}
      <p>{text}</p>
    </div>
  );
}
