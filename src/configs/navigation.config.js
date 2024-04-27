"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabstyles = exports.MainNavigationConfig = void 0;
var react_native_1 = require("react-native");
var colors_1 = require("../../assets/colors/colors");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.Colors.bg,
    },
});
exports.MainNavigationConfig = {
    headerShown: false,
    orientation: 'default',
    contentStyle: styles.container,
    animation: 'simple_push'
};
exports.tabstyles = {
    headerShown: false,
    tabBarStyle: { backgroundColor: colors_1.Colors.bg, height: 60, alignContent: 'center', justifyContent: 'center', padding: 10, borderRadius: 20, shadowColor: colors_1.Colors.white, shadowOffset: { width: 3, height: 10, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, },
    tabBarShowLabel: false,
    tabBarItemStyle: { height: 50 },
    tabBarActiveTintColor: colors_1.Colors.primary,
    tabBarInactiveTintColor: colors_1.Colors.white,
};
