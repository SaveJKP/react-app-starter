import axios from "axios";
import Swal from "sweetalert2";

export async function getData(url) {
  try {
    const response = await axios.get(
      url,
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch data:", err);
    return [];
  }
}

export async function postData(url,payload) {
  try {
    await axios.post(url, payload);
  } catch (e) {
    Swal.fire({
      title: "Error",
      text: e.message,
      icon: "error",
    });
  }
}

export async function DeleteData(url,id) {
  try {
    const button = await Swal.fire({
      title: "ยืนยันการลบ",
      text: "คุณต้องการลบใช่หรือไม่",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
    });

    if (button.isConfirmed) {
      await axios.delete(`${url}/${id}`);
    }
  } catch (e) {
    Swal.fire({
      title: "Error",
      text: e.message,
      icon: "error",
    });
  }
}
