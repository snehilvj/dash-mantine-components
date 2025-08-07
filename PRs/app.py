import dash_mantine_components as dmc
from dash import Dash, dcc

app = Dash()

component = dcc.Markdown(
    """
### PR Sample App

This sample app uses the unreleased version of dash-mantine-components based on this pull request. You can use it to test bug fixes or try new features.

### How to Use:  

1.  Replace this app with your own code.  
1.  The app is hosted live on PyCafe.  
3. If you have a PyCafe account, you can save the app to your account. Otherwise, simply copy the URL.
4. Share the link in the pull request or anywhere else.
    
    """
)


app.layout = dmc.MantineProvider([component])


if __name__ == "__main__":
    app.run(debug=True)
