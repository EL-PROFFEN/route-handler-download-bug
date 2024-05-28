export const dynamic = "force-dynamic";

// this route handler is used for downloading a file

export async function GET() {
  const textContent = "Hello World!";
  // return the textContent as a file
  return new Response(textContent, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": "attachment; filename=hello-world.txt",
    },
  });
}
