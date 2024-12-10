## Overview

This repo demonstrates an issue ([#404](https://github.com/jpudysz/react-native-unistyles/issues/404)) observed on Android with Unistyles versions 2.20 and 3 (beta).

After returning to the application from a WebBrowser session, the keyboard related `SharedValue`s from `react-native-reanimated` or `react-native-keyboard-controller` stop responding to keyboard changes until the app is closed and reopened.

This is problematic since WebBrowser is a common way to perform authentication for social login. After the user gets redirected back to the app, all dependencies on the keyboard's shared value stop working.

Importantly, one does not need to use any feature of unistyles for this to manifest. Simply configuring unistyles causes the issue.

The issue could not be reproduced on iOS.

The repo demonstrates the problem with `react-native-reanimated`, but it was also observed with `react-native-keyboard-controller`.

## Branches

The repo has a few branches.

Branches where the issue is not observed:

- `main` - no use of unistyles
- `unistyles-2.7.2` - use of unistyles 2.7.2
- `edge-to-edge` - use of react-native-edge-to-edge
- `keyboard-controller` - use of react-native-keyboard-controller
- `keyboard-controller-edge-to-edge` - use of react-native-keyboard-controller and react-native-edige-to-edge

Branches where the issue is observed:

- `unistyles-2.20` - use of unistyles 2.20
- `unistyles-3` - use of unistyles 3 (beta)

The repo also contains a few `.apk` files for some variants in the `apk` branch.

## To reproduce

1. Click on the text input field. Observe that the animated view attached to the shared value of the keyboard height gets properly animated.
2. Click on the button saying "Click to launch WebBrowser". While nothing seems to happen, the app just got back from a webbrowser session.
3. Click on the text input field again.

On the `main` branch, the animated view would work. On `unistyles-2.20` or `unistyles-3` branches, the view would stop responding.
