export async function GET(request: Request) {
  const users: any = [
    { id: 1, name: "John" },
    { id: 2, name: "David" },
    { id: 3, name: "Miller" },
  ];
  return new Response(JSON.stringify(users));
  
}
