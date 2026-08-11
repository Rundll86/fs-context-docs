import DefaultTheme from "vitepress/theme";
import Collaborator from "../components/Collaborator.vue";
import Label from "../components/Label.vue";
import SuggestionMeta from "../components/SuggestionMeta.vue";
import SuggestionResult from "../components/SuggestionResult.vue";
import SuggestionView from "../components/SuggestionView.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("Collaborator", Collaborator);
        app.component("Label", Label);
        app.component("SuggestionMeta", SuggestionMeta);
        app.component("SuggestionResult", SuggestionResult);
        app.component("SuggestionView", SuggestionView);
    }
};
