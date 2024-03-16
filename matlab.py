import pandas as pd

# Load the Excel file into a DataFrame
excel_file = './Logged_IN.xlsx'
df = pd.read_excel(excel_file)

# Specify the column name where you want to check for values exceeding +30 or -30
column_to_check = 'Accelerometer Z (g)'

# Filter out rows where the value in the specified column exceeds +30 or -30
df_filtered = df[(df[column_to_check] <= 30) & (df[column_to_check] >= -30)]

# Save the filtered data back to the Excel file
output_excel_file = './filtered_excel_file.xlsx'
df_filtered.to_excel(output_excel_file, index=False)

print("Filtered Excel file saved successfully.")