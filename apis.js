const supabase_client = supabase.createClient(
    "https://ahttrnaupayzqdhahspr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodHRybmF1cGF5enFkaGFoc3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MzY0NTMsImV4cCI6MjAyNzExMjQ1M30.gtIbuMWy5CxqNIIGaTCGBx2G2KId7r2FSomxhkCsWYo"
)

async function getAllRows() {
    const { data, error } = await supabase_client.from("todos2").select("*")
    return data
}

async function updateRow(row) {
    const { data, error } = await supabase_client
        .from("todos2")
        .update(row)
        .eq("id", row.id)
        .select()
}

async function addRow(row) {
    const { data, error } = await supabase_client
        .from("todos2")
        .insert([row])
        .select()
}

async function delRow(id) {
    const { data, error } = await supabase_client
        .from("todos2")
        .delete()
        .eq("id", id)
        .select()

    console.log(id)
}

async function getSingleRow(id) {
    const { data, error } = await supabase_client
        .from("todos2")
        .eq("id", id)
        .select()
    return data
}

export { getAllRows, getSingleRow, addRow, updateRow, delRow }
