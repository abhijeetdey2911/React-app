import pandas as pd 

# data = [1,2,3,4,5]
# dl = pd.DataFrame(data)
# print(dl)

df = pd.DataFrame({'reg_no': [101, 102, 103],
                   'Name': ['Abhi', 'kabhi', 'nahi'],
                   'T_Marks': [98, 89, 100]})
df.set_index('reg_no', inplace=True)

# print(df)
# print(df.iloc[1])

max = df["T_Marks"].max()
print(df.loc(max, "Name"))