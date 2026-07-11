from app.ml.template_model import TemplateModel
from app.ml.history_model import HistoryModel
from app.ml.favorite_model import FavoriteModel
from app.ml.collection_model import CollectionModel
from app.ml.analytics_model import AnalyticsModel

template_model = TemplateModel()
history_model = HistoryModel()
favorite_model = FavoriteModel()
collection_model = CollectionModel()
analytics_model = AnalyticsModel()


def get_lab_data():

    history = history_model.get_all()
    favorites = favorite_model.get_all()
    collections = collection_model.get_all()
    templates = template_model.get_templates()

    return {

        "status": "running",

        "statistics": {

            "history_count": len(history),

            "favorite_count": len(favorites),

            "collection_count": len(collections),

            "template_categories": len(templates),

        },

        "templates": templates,

        "history": history,

        "favorites": favorites,

        "collections": collections,

    }