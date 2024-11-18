import { SessionData } from "./Session";

const encryptedData = `W3siaXNTc3VsIjpmYWxzZSwidGl0bGUiOiLshLjshZgg7KCc66qpIiwidGltZSI6IjEwOjAwIH4gMTE6MDAiLCJzcGVha2VyIjpbeyJuYW1lIjoi7ZmN6ri464+ZIiwicG9zaXRpb24iOiLsmrDslYTtlZwg6rCc67Cc7J6QIiwiaW1hZ2UiOiIvYXNkZi9ob25nLnBuZyJ9LHsibmFtZSI6Iu2Zjeq4uOuPmSIsInBvc2l0aW9uIjoi7Jqw7JWE7ZWcIOqwnOuwnOyekCIsImltYWdlIjoiL2FzZGYvaG9uZy5wbmcifV19LHsiaXNTc3VsIjp0cnVlLCJ0aXRsZSI6IuyEuOyFmCDsoJzrqqkiLCJ0aW1lIjoiMTA6MDAgfiAxMTowMCIsInNwZWFrZXIiOlt7Im5hbWUiOiLtmY3quLjrj5kiLCJwb3NpdGlvbiI6IuyasOyVhO2VnCDqsJzrsJzsnpAiLCJpbWFnZSI6Ii9hc2RmL2hvbmcucG5nIn1dfSx7ImlzU3N1bCI6dHJ1ZSwidGl0bGUiOiLshLjshZgg7KCc66qpIiwidGltZSI6IjEwOjAwIH4gMTE6MDAiLCJzcGVha2VyIjpbeyJuYW1lIjoi7ZmN6ri464+ZIiwicG9zaXRpb24iOiLsmrDslYTtlZwg6rCc67Cc7J6QIiwiaW1hZ2UiOiIvYXNkZi9ob25nLnBuZyJ9XX0seyJpc1NzdWwiOnRydWUsInRpdGxlIjoi7IS47IWYIOygnOuqqSIsInRpbWUiOiIxMDowMCB+IDExOjAwIiwic3BlYWtlciI6W3sibmFtZSI6Iu2Zjeq4uOuPmSIsInBvc2l0aW9uIjoi7Jqw7JWE7ZWcIOqwnOuwnOyekCIsImltYWdlIjoiL2FzZGYvaG9uZy5wbmcifV19LHsiaXNTc3VsIjpmYWxzZSwidGl0bGUiOiLshLjshZgg7KCc66qpIiwidGltZSI6IjEwOjAwIH4gMTE6MDAiLCJzcGVha2VyIjpbeyJuYW1lIjoi7ZmN6ri464+ZIiwicG9zaXRpb24iOiLsmrDslYTtlZwg6rCc67Cc7J6QIiwiaW1hZ2UiOiIvYXNkZi9ob25nLnBuZyJ9XX1d`;

// function decodeBase64(data: string) {
//   return atob(data);
// }
function decodeBase64(base64String: string) {
  // Decode the Base64 string to a byte string
  const byteString = atob(base64String);

  // Convert the byte string to a Uint8Array
  const byteArray = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }

  // Decode the UTF-8 byte array to a string
  const utf8String = new TextDecoder("utf-8").decode(byteArray);

  return utf8String;
}
function decodeData(data: string) {
  return JSON.parse(data);
}

export function loadSessionData(): SessionData[] {
  return decodeData(decodeBase64(encryptedData)) as SessionData[];
}
