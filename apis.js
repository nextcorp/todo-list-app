const supabase_client = supabase.createClient(
    "https://ahttrnaupayzqdhahspr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodHRybmF1cGF5enFkaGFoc3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MzY0NTMsImV4cCI6MjAyNzExMjQ1M30.gtIbuMWy5CxqNIIGaTCGBx2G2KId7r2FSomxhkCsWYo"
)

async function getAllRows() {
    const { data, error } = await supabase_client.from("todos2").select("*")
    return data
}

async function update(rows) {
    const { data, error } = await supabase_client
        .from("todos2")
        .upsert(rows)
        .select()
}

async function addRow(row) {
    const { data, error } = await supabase_client
        .from("todos2")
        .insert([row])
        .select()
}

async function delRow(row) {
    const { data, error } = await supabase_client
        .from("todos2")
        .delete()
        .eq("id", row.id)
        .select()

    console.log(id)
}

export { getAllRows, addRow, update, delRow }
