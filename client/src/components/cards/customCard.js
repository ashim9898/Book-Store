import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const CustomCard = (props) => {
	return (
		<div className="card" onClick={() => props.assignRole(props.role)} style={{ border: "1px solid #ccc", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff", padding: "16px", cursor: "pointer" }}>
  <i className="card_icon" style={{ marginRight: "8px", fontsize: "24px" }}>{props.icon}</i>
  <i className='check' style={{ fontSize:"20px"}}><CheckCircleIcon /></i>
  <div className="card_content" style={{ paddingLeft: "8px" }}>
    <h5 className="card_title btn"><span>{props.role}</span><TrendingFlatIcon /></h5>
  </div>
</div>
	)
}

export default CustomCard;
