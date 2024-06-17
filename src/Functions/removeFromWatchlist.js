import { toast } from "react-toastify";

export const removeFromWatchlist = (e, id, setIsCoinAdded, setWatch) => {
  e.preventDefault();
  if (window.confirm("Are you sure you want to remove this coin?")) {
    setIsCoinAdded(false);
    let watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const newList =
      watchlist?.length > 0 && watchlist.filter((coin) => coin != id);
    if (setWatch) {
      setWatch(newList);
      
    }
    localStorage.setItem("watchlist", JSON.stringify(newList));
    toast.success(
      `${
        id.substring(0, 1).toUpperCase() + id.substring(1)
      } - has been removed!`
    );
    // window.location.reload();
    
  } else {
    toast.error(
      `${
        id.substring(0, 1).toUpperCase() + id.substring(1)
      } - could not be removed!`
    );
    setIsCoinAdded(true);
  }
};









