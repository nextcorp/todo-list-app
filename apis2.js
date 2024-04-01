const supabase_client = supabase.createClient(
    "https://ahttrnaupayzqdhahspr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodHRybmF1cGF5enFkaGFoc3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MzY0NTMsImV4cCI6MjAyNzExMjQ1M30.gtIbuMWy5CxqNIIGaTCGBx2G2KId7r2FSomxhkCsWYo"
)

async function getRows() {
    const { data, error } = await supabase_client.from("todos2").select()
    return data
}

async function updRows(rows) {
    const { data, error } = await supabase_client
        .from("todos2")
        .upsert(rows)
        .select()
}

export { getRows, updRows }
