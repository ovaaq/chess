from datetime import datetime


def log(message: str, is_error: bool = False) -> None:
    """
    Adds date and time to message that is printed.

    :param is_error: bool that tells is message error
    :param message: Any message wanted to log
    :return: None
    """
    label: str = "[INFO] "
    if is_error:
        label = "[ERROR] "
    print(str(datetime.now()) + " : " + label + message)


def exception(exception: Exception) -> None:
    """
    Adds date and time to message that is printed.

    :param exception: Any exception wanted to log
    :return: None
    """
    print(str(datetime.now()) + " : " + "[ERROR] " + exception.__str__())

    # TODO: feature/CONSOLE-LOG
    #  *Save logs somewhere
    #  *Methods to search from the log
    #  *API for the logs
