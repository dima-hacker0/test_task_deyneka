import classes from "./download_catalog.module.css";

const DownloadCatalog = () => {
  return (
    <div className={classes.item}>
      <div className={classes.circlePdf}>Pdf</div>
      <p className={classes.downloadСatalog}>скачать прайс-каталог</p>
    </div>
  );
};

export default DownloadCatalog;
