#!/usr/bin/env python3
""" Module that contains list_all function """


def list_all(mongo_collection):
    """ Lists all documents in a collection """
    return list(mongo_collection.find())
