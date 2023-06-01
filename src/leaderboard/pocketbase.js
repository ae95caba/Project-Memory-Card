import PocketBase from "pocketbase";
export async function getList() {
  try {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const resultList = await pb.collection("leaderboard").getList(1, 50);

    return resultList;
  } catch (error) {
    alert(error);
  }
}
