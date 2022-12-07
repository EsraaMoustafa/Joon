
{
    "name": "6sigma code sh electronic pos KSA",
    "author": "6sigma code",
    "category": "point of sale",
    "summary": "This Module Customize POS Receipt For Joon Company,"
               " Edit On sh_pos_all_in_one_retail_ksa and sh_electronic_pos_qr_saudi POS files",
    "description": """ 
        This Module Customize POS Receipt For Joon Company, 
        Inherits sh_pos_all_in_one_retail_ksa and sh_electronic_pos_qr_saudi POS files
        Add Tax Amount Per Line in OrderLines and Add Phone Input To The Customer which adding a new customer if not Exist. 
        """,
    "version": "14.0.0",
    "depends": ['sh_pos_all_in_one_retail_ksa', 'sh_electronic_pos_qr_saudi', 'l10n_sa_pos'],
    "application": True,
    "data": [
        'views/assets.xml',
    ],
    'qweb': [
        'static/src/xml/pos.xml',
        'static/src/xml/PaymentScreenStatus.xml',
    ],
    "auto_install": False,
    "installable": True
}
