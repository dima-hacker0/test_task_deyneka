import classes from "./download.module.css";

const DownloadCatalog = () => {
  return (
    <div className={classes.item}>
      <div className={classes.circlePdf}>Pdf</div>
      <p className={classes.downloadСatalog}>скачать прайс-каталог</p>
    </div>
  );
};

export default DownloadCatalog;
