import os
import annotateit

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    host = os.environ.get('HOST', '0.0.0.0')
    app = annotateit.create_app()
    #annotateit.create_db(app)
    app.debug = True
    app.run(port=port, host=host)
