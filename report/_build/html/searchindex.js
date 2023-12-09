Search.setIndex({"docnames": ["fraud_detection_full"], "filenames": ["fraud_detection_full.ipynb"], "titles": ["Fraudulent Card Transaction Classifier Based On <code class=\"docutils literal notranslate\"><span class=\"pre\">Capital</span> <span class=\"pre\">One</span></code> Synthetic Data"], "terms": {"By": 0, "jenni": 0, "lee": 0, "shawn": 0, "hu": 0, "korai": 0, "tecim": 0, "iri": 0, "luo": 0, "2023": 0, "12": 0, "01": 0, "through": 0, "thi": 0, "project": 0, "we": 0, "attempt": 0, "construct": 0, "three": 0, "classif": 0, "model": 0, "capabl": 0, "distinguish": 0, "between": 0, "non": 0, "indic": 0, "custom": 0, "account": 0, "The": 0, "experi": 0, "includ": 0, "logist": 0, "regress": 0, "random": 0, "forest": 0, "gradient": 0, "boost": 0, "conclus": 0, "deriv": 0, "from": 0, "our": 0, "analysi": 0, "ar": 0, "circumscrib": 0, "substanti": 0, "imbal": 0, "within": 0, "origin": 0, "dataset": 0, "nevertheless": 0, "have": 0, "put": 0, "forth": 0, "prospect": 0, "measur": 0, "rectifi": 0, "train": 0, "f1": 0, "score": 0, "0": 0, "00623": 0, "0783": 0, "872": 0, "test": 0, "00612": 0, "0732": 0, "0386": 0, "given": 0, "close": 0, "report": 0, "center": 0, "choic": 0, "inform": 0, "s": 0, "swift": 0, "implement": 0, "broad": 0, "interpret": 0, "make": 0, "access": 0, "gener": 0, "audienc": 0, "while": 0, "more": 0, "suit": 0, "practic": 0, "busi": 0, "set": 0, "In": 0, "recent": 0, "time": 0, "credit": 0, "fraud": 0, "ha": 0, "emerg": 0, "one": 0, "most": 0, "preval": 0, "form": 0, "activ": 0, "accord": 0, "jack": 0, "capor": 0, "incid": 0, "seen": 0, "signific": 0, "rise": 0, "escal": 0, "371": 0, "000": 0, "2017": 0, "1": 0, "4": 0, "million": 0, "2021": 0, "To": 0, "combat": 0, "surg": 0, "corpor": 0, "turn": 0, "machin": 0, "learn": 0, "algorithm": 0, "emploi": 0, "them": 0, "automat": 0, "detect": 0, "filter": 0, "These": 0, "histor": 0, "identifi": 0, "potenti": 0, "driven": 0, "goal": 0, "an": 0, "effect": 0, "mitig": 0, "occurr": 0, "2018": 0, "util": 0, "build": 0, "consist": 0, "786": 0, "363": 0, "entri": 0, "sinc": 0, "all": 0, "ensur": 0, "confidenti": 0, "maintain": 0, "throughout": 0, "process": 0, "histori": 0, "date": 0, "partner": 0, "amount": 0, "locat": 0, "where": 0, "wa": 0, "made": 0, "much": 0, "total": 0, "contain": 0, "28": 0, "variabl": 0, "can": 0, "us": 0, "featur": 0, "target": 0, "valu": 0, "howev": 0, "significantli": 0, "imbalanc": 0, "favor": 0, "fraudel": 0, "impact": 0, "python": 0, "program": 0, "languag": 0, "van": 0, "rossum": 0, "drake": 0, "2009": 0, "conduct": 0, "also": 0, "comput": 0, "tool": 0, "avail": 0, "scikit": 0, "pedregosa": 0, "et": 0, "al": 0, "2011": 0, "scipi": 0, "mckinnei": 0, "other": 0, "2010": 0, "As": 0, "disclaim": 0, "dr": 0, "tiffani": 0, "timber": 0, "sampl": 0, "repositori": 0, "provid": 0, "cours": 0, "materi": 0, "dsci": 0, "522": 0, "univers": 0, "british": 0, "columbia": 0, "retriv": 0, "public": 0, "github": 0, "which": 0, "each": 0, "row": 0, "repres": 0, "same": 0, "record": 0, "multipl": 0, "its": 0, "own": 0, "id": 0, "categor": 0, "distribut": 0, "examin": 0, "visual": 0, "abov": 0, "evid": 0, "certain": 0, "exhibit": 0, "class": 0, "notabl": 0, "isfraud": 0, "column": 0, "address": 0, "undertak": 0, "addit": 0, "step": 0, "see": 0, "skew": 0, "numer": 0, "thu": 0, "median": 0, "central": 0, "tendenc": 0, "when": 0, "standard": 0, "unnam": 0, "unique_entry_count": 0, "11": 0, "cardlast4digit": 0, "5246": 0, "accountnumb": 0, "5000": 0, "2": 0, "customerid": 0, "3": 0, "merchantnam": 0, "2490": 0, "10": 0, "dateoflastaddresschang": 0, "2184": 0, "5": 0, "9": 0, "accountopend": 0, "1820": 0, "6": 0, "8": 0, "currentexpd": 0, "165": 0, "7": 0, "merchantcategorycod": 0, "19": 0, "posentrymod": 0, "acqcountri": 0, "merchantcountrycod": 0, "posconditioncod": 0, "transactiontyp": 0, "13": 0, "cardpres": 0, "14": 0, "expirationdatekeyinmatch": 0, "15": 0, "count": 0, "uniqu": 0, "observ": 0, "present": 0, "datafram": 0, "wai": 0, "too": 0, "mani": 0, "few": 0, "appli": 0, "function": 0, "narrow": 0, "down": 0, "number": 0, "onc": 0, "greater": 0, "than": 0, "generalize_categori": 0, "appear": 0, "less": 0, "reduc": 0, "decid": 0, "drop": 0, "none": 0, "frequenc": 0, "higher": 0, "two": 0, "thei": 0, "seem": 0, "carri": 0, "littl": 0, "predict": 0, "power": 0, "figur": 0, "creditlimit": 0, "singl": 0, "outlier": 0, "wherea": 0, "intrapol": 0, "miss": 0, "strategi": 0, "mean": 0, "decis": 0, "stem": 0, "fact": 0, "robust": 0, "separ": 0, "simpleimput": 0, "final": 0, "transform": 0, "52": 0, "rank_test_scor": 0, "mean_test_scor": 0, "mean_train_scor": 0, "param_logisticregression__c": 0, "param_logisticregression__solv": 0, "mean_fit_tim": 0, "062271": 0, "062268": 0, "newton": 0, "choleski": 0, "137208": [], "062249": 0, "062264": 0, "lbfg": 0, "051317": [], "062030": 0, "062123": 0, "738107": [], "062027": 0, "062116": 0, "829261": [], "062017": 0, "00": 0, "740994": [], "062014": 0, "557267": [], "062013": 0, "100": 0, "585477": [], "061974": [], "062118": 0, "128233": [], "061963": [], "258923": [], "061943": [], "062114": [], "624840": [], "effort": 0, "evalu": 0, "primari": 0, "challeng": 0, "extrem": 0, "confus": 0, "matric": 0, "discrep": 0, "perform": 0, "phase": 0, "For": 0, "themodel": 0, "achiev": 0, "6024": 0, "moder": 0, "reason": 0, "balanc": 0, "precis": 0, "recal": 0, "0343": 0, "suggest": 0, "well": 0, "unseen": 0, "matrix": 0, "show": 0, "consider": 0, "true": 0, "posit": 0, "4334": 0, "misclassifi": 0, "case": 0, "5607": 0, "contrast": 0, "reveal": 0, "conserv": 0, "onli": 0, "58": 0, "produc": 0, "larg": 0, "fals": 0, "neg": 0, "2418": 0, "were": 0, "select": 0, "over": 0, "like": 0, "justifi": 0, "better": 0, "simplic": 0, "easier": 0, "linear": 0, "natur": 0, "allow": 0, "clear": 0, "understand": 0, "import": 0, "relationship": 0, "could": 0, "benefici": 0, "further": 0, "tune": 0, "transpar": 0, "system": 0, "stark": 0, "differ": 0, "need": 0, "It": 0, "possibl": 0, "despit": 0, "rel": 0, "overfit": 0, "captur": 0, "underli": 0, "pattern": 0, "situat": 0, "call": 0, "depth": 0, "regular": 0, "techniqu": 0, "prevent": 0, "explor": 0, "ensembl": 0, "sophist": 0, "yield": 0, "bia": 0, "varianc": 0, "furthermor": 0, "would": 0, "adjust": 0, "threshold": 0, "improv": 0, "sensit": 0, "eda": 0, "exploratori": 0, "vital": 0, "befor": 0, "introduc": 0, "scrutin": 0, "determin": 0, "appropri": 0, "imput": 0, "had": 0, "portion": 0, "remov": 0, "risk": 0, "hot": 0, "encod": 0, "binari": 0, "categori": 0, "label": 0, "those": 0, "excess": 0, "handl": 0, "particularli": 0, "outnumb": 0, "ones": 0, "undersampl": 0, "size": 0, "major": 0, "creat": 0, "approach": 0, "crucial": 0, "typic": 0, "do": 0, "cross": 0, "valid": 0, "chosen": 0, "increas": 0, "complex": 0, "enhanc": 0, "abil": 0, "began": 0, "due": 0, "mai": 0, "progress": 0, "adept": 0, "lastli": 0, "advanc": 0, "aim": 0, "refin": 0, "limit": 0, "success": 0, "underfit": 0, "excel": 0, "underperform": 0, "impli": 0, "scarc": 0, "instanc": 0, "pose": 0, "often": 0, "lead": 0, "poor": 0, "oversampl": 0, "minor": 0, "counteract": 0, "high": 0, "volum": 0, "low": 0, "specif": 0, "focus": 0, "represent": 0, "smote": 0, "part": 0, "realist": 0, "so": 0, "aid": 0, "characterist": 0, "both": 0, "prior": 0, "undertook": 0, "rigor": 0, "clean": 0, "variou": 0, "commonli": 0, "task": 0, "classifir": 0, "hyperparamet": 0, "optim": 0, "find": 0, "avoid": 0, "issu": 0, "assess": 0, "metric": 0, "suitabl": 0, "problem": 0, "curv": 0, "auc": 0, "roc": 0, "help": 0, "accur": 0, "tran": 0, "futur": 0, "direct": 0, "preliminari": 0, "investig": 0, "highlight": 0, "plan": 0, "resampl": 0, "engin": 0, "incorpor": 0, "merchant_nam": 0, "priorit": 0, "consid": 0, "altern": 0, "loss": 0, "weight": 0, "entropi": 0, "focal": 0, "tailor": 0, "adopt": 0, "comprehens": 0, "resourc": 0, "manag": 0, "neural": 0, "network": 0, "intric": 0, "effici": 0, "production": 0, "pvg": 0, "f": 0, "g": 0, "varoquaux": 0, "A": 0, "gramfort": 0, "v": 0, "michel": 0, "b": 0, "thirion": 0, "o": 0, "grisel": 0, "m": 0, "blondel": 0, "p": 0, "prettenhof": 0, "r": 0, "weiss": 0, "dubourg": 0, "j": 0, "vanderpla": 0, "passo": 0, "d": 0, "cournapeau": 0, "brucher": 0, "perrot": 0, "e": 0, "duchesnai": 0, "journal": 0, "research": 0, "2825": 0, "2830": 0, "tt23": 0, "joel": 0, "ostblom": 0, "melissa": 0, "breast": 0, "cancer": 0, "predictor": 0, "teach": 0, "team": 0, "url": 0, "ttimber": 0, "breast_cancer_predictor_pi": 0, "vrd09": 0, "guido": 0, "fred": 0, "l": 0, "manual": 0, "createspac": 0, "scott": 0, "vallei": 0, "ca": 0, "isbn": 0, "1441412697": 0, "capitalone18": 0, "scienc": 0, "capitalonerecruit": 0, "http": 0, "githom": 0, "ds": 0, "jackcaporal23": 0, "ident": 0, "theft": 0, "statist": 0, "ascent": 0, "mote": 0, "fool": 0, "servic": 0, "www": 0, "com": 0, "wesmaothers10": 0, "structur": 0, "proceed": 0, "9th": 0, "confer": 0, "scipy2010": 0, "org": 0, "html": 0, "022794": [], "853638": [], "599999": [], "693679": [], "818031": [], "912977": [], "971193": [], "564678": [], "234752": [], "410570": [], "821433": [], "755008": [], "937287": [], "076785": [], "726678": [], "121044": [], "112472": [], "061975": 0, "062117": 0, "221518": [], "061970": 0, "916947": [], "061964": 0, "257002": [], "979672": [], "17": [], "161031": [], "186174": [], "479856": [], "077324": [], "817372": [], "335835": [], "517537": [], "522228": [], "442811": [], "displai": 0, "overal": 0, "precision_recal": 0, "pr": 0, "default": 0, "chang": 0, "lower": 0, "590407": 0, "954859": 0, "804382": 0, "159563": 0, "968418": 0, "616485": 0, "354822": 0, "869936": 0, "194475": 0, "563393": 0}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"fraudul": 0, "card": 0, "transact": 0, "classifi": 0, "base": 0, "On": 0, "capit": 0, "One": 0, "synthet": 0, "data": 0, "summari": 0, "introduct": 0, "method": 0, "preprocess": 0, "result": 0, "discuss": 0, "refer": 0}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})